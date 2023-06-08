// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies) return res.status(400).json({ message:  "Invalid cookies"})
    //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'Lax', secure: true })
    res.status(200).json({ message: 'Cookie cleared' })
    console.log(JSON.stringify(cookies)
        .replace(/"/g, '')
        .replace(/=/g, '')+ "Whipping cookies" )  //Remove trailing slash
}


module.exports = logout

