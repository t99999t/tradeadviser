const db = require('../db/db');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({message: 'Unauthorized refresh token'});
        }
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'Lax', secure: true});

        const foundUser = await db.User.findOne({where: {refreshToken: refreshToken}});

        // Detected refresh token reuse!
        if (!foundUser) {
            jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET ,
                async (err, decoded) => {
                    if (err) return res.sendStatus(403); //Forbidden
                    console.log('attempted refresh token reuse!')
                    const hackedUser = await db.User.findOne({where: {username: decoded.username}});
                    hackedUser.refreshToken = [];
                    const result = await hackedUser.save();
                    console.log(result);
                }
            )
            return res.status(403).json({message: 'forbidden'});
        }

        const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken);

        // evaluate jwt
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) {
                    console.log('expired refresh token')
                    foundUser.refreshToken = [...newRefreshTokenArray];
                    const result = await foundUser.save();
                    console.log(result);
                }
                if (err || foundUser.username !== decoded.username) return res.status(403).json({message: 'Invalid refresh token'});

                // Refresh token was still valid
                const roles = foundUser.role;
                const accessToken = jwt.sign(
                    {
                            username: decoded.username,
                            role: roles

                    },
                    process.env.ACCESS_TOKEN_SECRET + Math.floor(Math.random() * 1000000000),
                    {expiresIn: 10}
                );

                const newRefreshToken = jwt.sign(
                    {username: foundUser.username},
                    process.env.REFRESH_TOKEN_SECRET + Math.floor(Math.random() * 1000000000),
                    {expiresIn: 3600*24}
                );
                // Saving refreshToken with current user
                foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
                await foundUser.save();

                // Creates Secure Cookie with refresh token
                res.cookie('jwt', newRefreshToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'Lax',
                    maxAge: 
                    3600*24
                });

                res.status(200).json({role: roles, accessToken: accessToken})
            }
        );
    } catch (err) {
        console.log(err.stack+err.statusText);
    }
}

module.exports = { handleRefreshToken }