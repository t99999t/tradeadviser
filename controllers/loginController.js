const db= require('../db/db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
        if(!username || !password)    return res.status(400).json({ message:'username and password can\'t be empty'})

    const foundUser = await db.User.findOne({where: {username: username}})
    if (!foundUser) {
        console.log(username + ' is not a valid username')
        return res.status(401).json({message: 'Access denied! Invalid username or password.'})
        }

    const match = await bcrypt.compare(password, foundUser.password)
    if (!match)         return res.status(403).json({message:'Invalid password.'})



    foundUser.accessToken = jwt.sign({username: foundUser.username,role:foundUser.role},
        process.env.ACCESS_TOKEN_SECRET+Math.floor(Math.random() * 1000000000),

        {expiresIn: '10s'})

    foundUser.refreshToken= jwt.sign({username:foundUser.username,role:foundUser.role},
        process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'})


    // Create secure cookie with refresh token
    res.cookie('jwt', foundUser.refreshToken, {
        httpOnly: true, //accessible only by web server
        secure: true, //https
        sameSite: 'Lax', //cross-site cookie
        maxAge: 24 * 3600//cookie expiry: set to match rT
    })
    console.log(foundUser.refreshToken +
        'is a valid refresh token for user ' +
        foundUser.username)
    foundUser.isActive = true;
    await foundUser.save()


    // Send accessToken containing username and roles
return      res.status(200).json({accessToken: foundUser.accessToken,
        refreshToken: foundUser.refreshToken,
        id: foundUser.id,
        role: foundUser.role,
        isActive: foundUser.isActive
    })

}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout= (req,res)=>{
    const cookies = req.cookies
    if (!cookies) return res.status(400).json({message:'Invalid cookies'})

        //No content

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'Lax', secure: true })
    res.status(200).json({message:'Cookie cleared'} )
    console.log(JSON.stringify(cookies)
    .replace(/"/g, '')
       .replace(/=/g, '')+ "Whipping cookies" )  //Remove trailing slash
}
module.exports = {login, logout}