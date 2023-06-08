const  express= require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const usersController = require("../controllers/usersController");
const verifyRoles = require("../middleware/verifyRoles");
const handleRefreshtToken= require("../controllers/handleRefreshToken")
const verifyJWT= require("../middleware/verifyJWT")
router.get('/api/user/ea/license', usersController.getEALicense);
router.get('/ping',  (req,res)=> {
  return res.status(200).json({
    message: 'pong'
})});
// check server health status
//router.get('/redirect', (req, res) => {
  //let REDIRECT_URI=process.env.REDIRECT_URI
  //const authCodeUrlParameters = {scopes: ["user.read"],
    //redirectUri: REDIRECT_URI,indexRouter: true
  //}

  //});


router.get('/login',verifyJWT, loginController.login);

//Get all users
router.get('/api/users/list',verifyJWT,usersController.getAllUsers);
// Get  users bi id
router.get('/api/users/:id', verifyRoles, usersController.getUserById);
//Update users
router.put('/api/users/update',verifyJWT, usersController.updateUser);

//Delete users
router.get('/api/users/delete',verifyJWT,usersController.deleteUser);

//Get users Register
router.post('/register/auth', registerController.registerAuth);

//Get users forgot password
router.post('/forgot/password/auth', usersController.forgotPasswordAuth);

//Get users forgot email
router.post('/api/reset/password/auth',verifyJWT,usersController.ResetPasswordAuth);
//Refresh
router.get('/refresh' ,verifyJWT,handleRefreshtToken.handleRefreshToken);
//Get users logged in
router.post('/login/auth', loginController.login);
//Get users logged out
router.get('/logout',verifyJWT,loginController.logout);

//catch 404 and forward to error handler
router.get('*',
     ( res)=> {
      res.status(404).json({

            message: 'Not Found'
          })})

//Check server status and forward it
router.get('/ws', ( res)=> {
  return res.status(200).json({message: 'Server is up and running'})
  })
  router.get('/status', ( res)=> {
  return res.status(200).json({message: 'Server is up and running'})
  })
  router.get('/health', ( res)=> {
  return res.status(200).json({message: 'Server is up and running'})
  })
  router.get('/ping', ( res)=> {
  return res.status(200).json({message: 'Server is up and running'})
  })
  router.get('/', ( res)=>{
  return res.status(200).json({message: 'Server is up and running'})
  })


module.exports = {router}




/*
 * Licensed to the Apache Software Foundation (ASF) under one or more contributory
 */
