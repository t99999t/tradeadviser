const  express= require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const usersController = require("../controllers/usersController");
//const verifyRoles = require("../middleware/verifyRoles");
const handleRefreshToken= require("../controllers/handleRefreshToken")
const verifyJWT= require("../middleware/verifyJWT")

router.get('/ping',  (res)=> {
  return res.status(200).json({
    message: 'pong'
})});
//check server health status
router.get('/redirect', (req, res) => {
  let REDIRECT_URI=process.env.REDIRECT_URI
  const authCodeUrlParameters = {scopes: ["user.read"],
    redirectUri: REDIRECT_URI,indexRouter: true
  }

  });


router.get('/login', loginController.login);

//Get all users
router.get('/api/users/list',verifyJWT,usersController.getAllUsers);
// Get  users by id
router.get('/api/users/id',verifyJWT, usersController.getUserById);
//Update users
router.put('/api/users/update',verifyJWT, usersController.updateUser);

//Delete users
router.put('/api/users/delete',verifyJWT,usersController.deleteUser);

//Get users Register
router.post('/register/auth',verifyJWT, registerController.registerAuth);

//Get users forgot password
router.post('/forgot/password/auth',verifyJWT, usersController.forgotPasswordAuth);

//Get users forgot email
router.post('/api/reset/password/auth',verifyJWT,usersController.ResetPasswordAuth);
//Refresh
router.get('/refresh' ,verifyJWT, handleRefreshToken.handleRefreshToken);
//Get users logged in
router.post('/login/auth', loginController.login);
//Get users logged out
router.get('/logout',verifyJWT,loginController.logout);

//catch 404 and forward to error handler
router.get('*',
     ( res)=> {
      res.json({'status': 404,'message': 'Not Found'})
          })

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
