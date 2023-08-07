const db= require('../db/db');
const crypto = require('bcrypt');
const createError = require("http-errors");
const {key1, key2} = require("../db/generate_keys");
exports.registerAuth = async (req, res) => {
    try {
        console.log("username " + req.body.username)
     let user=   await  db.User.findOne({ where :{  username: req.body.username , email: req.body.email}})

            if (user) {
             return    res.status(400).json({message: user.username + " is already registered!"})
            }
            const hashedPwd = await crypto.hash(req.body.password, 10).catch(err => {

                return next(createError("Password error:  " + err.statusText || err.message || err.stack));
            });

            //create and store the new user
       const create =     await db.User.create({
                id: req.body.id,
                username: req.body.username,
                password: hashedPwd,
                email: req.body.email,
                phone: req.body.phone,
                role: req.body.role,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                middlename: req.body.middlename,
                sex: req.body.sex,
                birthdate: req.body.birthdate,
                resetPasswordToken:key1,
                refreshToken: key1,
                accessToken:key2,
                isActive: false
            })
       if(create){
           return res.status(200).json({message: "User created successfully!"})

       }else {  
           return res.status(400).json({message: create.message})
       }

    }catch(err ) {
        console.log(err);
        return createError("message: Failed to create user \n" + err.message)
    }
}



