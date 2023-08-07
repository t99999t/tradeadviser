const createError = require('http-errors')
const bcrypt = require("bcrypt");
const db = require("../db/db");
const nodeMailer = require("nodemailer");//to be used for sending emails

const getAllUsers = async ( res) => {//get all users
    const users = await db.User.findAll();
    if (!users) return createError(users.statusText);
    res.json({status:200,user: users});
}
const deleteUser = async (req, res) => {//delete one user
    if (!req.body.username||!req.body.password) return res.status(400).json({ "message": 'User ID required' });
    const user = await db.User.findOne({where:{ id: req.body.id }})
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found..!` });
    }
    const result = await db.User.delete({ id: req.body.id });

    if (!result) {
        return res.status(204).json({'message': `User ID ${req.body.id} not found..!` });
    }else {
        return res.status(200).json({'message': `User ID ${req.body.id} successfully deleted.` });
    }
  

}
const getUserById = async (req, res) => {
let id =1
 //get user from cookie
 const user = await db.User.findOne({ where:{ id: id }});

 if (!user)

  return res.status(204).json({'message': `User ID ${id} not found..!` });
 return res.json({status:200,user: user});

}



const userProfile= async  (req, res) => {
    const user = await db.User_Profile.findOne({ where:{ id: req.body.id }});
    if (!user) return res.json({status:204,message: 'User ID '+req.body.id+' not found'});

}

const userProfileUpdate=async  (req, res) => {
    if (!req.body.id) return res.json({status:400,message: 'ID parameter is required.' })
    const user = await db.User.findOne({where:{ id: req.body.id} })
    if (!user) return res.json({ status:204,
     message: ' No user matches ID '+req.body.id })
    if (req.body.firstname) user.firstname = req.body.firstname;
    if (req.body.lastname) user.lastname = req.body.lastname;
    if (req.body.password) user.password = req.body.password;
    if (req.body.email ) user.email = req.body.email;
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.role) user.role = req.body.role;
    if (req.body.gender) user.gender = req.body.gender;
    if (req.body.birthday) user.birthday = req.body.birthday;
    const result = await user.save();
    if (result.status ==='success') return res.status(200).json({ "successfully":result.statusText})
    return createError(result.status,result.statusText)}

const updateUser=async  (req, res) => {
    if (!req.body.id) return res.json({ status:400,'message': 'ID parameter is required.' })
    const user = await db.User.findOne({where:{ id: req.body.id} })
    if (!user) return res.json({ "message": `No user matches ID ${req.body.id}.` ,status:404})
    if (req.body.firstname) user.firstname = req.body.firstname;
    if (req.body.lastname) user.lastname = req.body.lastname;
    if (req.body.password) user.password = req.body.password;
    if (req.body.email ) user.email = req.body.email;
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.role) user.role = req.body.role;
    if (req.body.gender) user.gender = req.body.gender;
    if (req.body.birthday) user.birthday = req.body.birthday;

    const result = await user.save();
  if (result) return res.json({status:200, message:result.statusText})
  else return createError(result.status,result.statusText)
}

const ResetPasswordAuth=async(req, res)=> {
                await db.User.findOne({
                    where: {                   id: req.body.id
                }}).then(foundUser => {

       foundUser.update({where: {password: bcrypt.hash(req.body.password, 10)}})
                    foundUser.save();//Saving new user password
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');

                    console.log('Saving new user password');
            res.status(200).json({ message:'password updated successfully!'});
                       }).catch((error)=>{
                    console.log(error);

                        createError(error.statusText||error.message)
                    ;
                })

}
const forgotPasswordAuth = async (req, res)=> {
    try {
        let email = req.body.email;
        if (!email) return res.status(400).json({"message": "Email can't be empty "});
const foundUser = await db.User.findOne({where: {email: email}})
        if (!foundUser) {
            return res.json({status: 404,
                "message": "User not found!"

            })
        }
        localStorage.setItem('id', foundUser.id);

        let keys1 = foundUser.id;

        async function SendMailer() {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,           //587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "noelmartialnguemechieu@gmail.com", // generated ethereal user
                    pass: "mcehaqgassodtyfh", // generated ethereal password
                },

            })
            if (!transporter) return createError("error: No mail transport found. \nPlease try again!")

            function CreateToken() {

                return keys1;
            }
const expiration = (Date)(Math.floor(Date.now() / 10000) +
                (60 * 60 * 24 * 1)); // 30 days
            CreateToken();
            let data = {
                from: "support@tradeadviser.org", // sender address
                to: foundUser.email,
                title: "Reset Password",
                text: ""
                    + "Hi!n This is the reset password link please follow the link to reset it.\n"+process.env.APP_CLIENT_URL+"/reset/password/"+foundUser.email

                    + " Please make sure you use this link before expiration time  ."+expiration
            }

            let info = {}
            try {
                info = await transporter.sendMail(data);
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
                return res.json({
                status: 200,
                    message: 'OK' + "  " +
                        "We 've sent a reset password for '" + foundUser.firstname + "'to  your email address  .Please follow that link to renew your password"
                        + process.env.APP_CLIENT_URL+"api/reset/password"+foundUser.email+
                        "Please make sure you use this link before the expiration time. This link wil expire withing 2 hours" +expiration

                })
                // Preview only available when sending through an Ethereal account
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou..
            } catch (err) {
                console.log(err)
                if (err.code === 400) {
                    return res.json({status:400,
                        message: 'ERROR' + "  " +
                            req.body.email +" "+ err.message

                            + "  is not a valid email address"
                    })
                }
                if (err.code === 500) {
                    return res.status(500).json({
                    message: " internal server error "+err.message})

                }
            }
        }
        await SendMailer();

//now send the message through an Etherea
    }catch (err) {
    console.log(err)
        return res.json({
        status: 500,message: "  " +
                req.body.email
        + "  is not a valid email address"
        })
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUserById,
    updateUser,
    ResetPasswordAuth,
    forgotPasswordAuth}


