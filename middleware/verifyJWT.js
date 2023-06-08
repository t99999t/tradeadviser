const jwt = require('jsonwebtoken');
const verifyJWT = (req, res, next) => {

        if (req.cookies.jwt=== undefined|| req.cookies.jwt===null) {
            return res.status(403).json({
                error: 'Unauthorized access token'})
        }
            // Destructuring refreshToken from cookie
            const refreshToken = req.cookies.jwt;

            // Verifying refresh token
            jwt.verify(refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
                (err, decoded) => {
                    if (err) {

                        // Wrong Refresh Token
                        return res.status(403).json({ message: 'Unauthorized access!' });
                    }
                    else {
                        // Correct token we send a new access token
                        const accessToken = jwt.sign({
                            role: decoded.role,
                                username: decoded.username
                        },
                            process.env.ACCESS_TOKEN_SECRET,{
                            expiresIn : '10s'
                            },
                            next
                        );
                        return res.status(200).json({ accessToken:accessToken, role: decoded.role });
                    }

                },
                next(
                    {
                        message: 'Unauthorized access!'
                    }
                )


                )

    }
module.exports = verifyJWT