

//mysql -u doadmin -p<your_password> -h mysql-test-do-user-4915853-0.db.ondigitalocean.com -P 25060 -D defaultdb --ssl-ca=path/to/your-ssl.crt

const host = process.env.DATABASE_HOST;
const port =process.env.DATABASE_PORT;
const database =process.env.DATABASE_NAME;
const users = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dialect = process.env.DATABASE_DIALECT;
console.log(host, port, database, users, password);
const mysql2 = require("mysql2/promise");
const Sequelize = require("sequelize");
const User = require('../models/User')
const Employee = require('../models/Employee')
const Profile = require('../models/Profile')
const Comment = require('../models/Comment')
const Message = require('../models/Message')
const Order = require('../models/Order')
const Music = require('../models/Music')
const User_Profile = require('../models/User_Profile')
const Video = require('../models/Video')
const Image = require('../models/Image.js')
const Product = require('../models/Product');
const fs = require('fs');
const createError = require("http-errors");
const redis = require('redis');
const db = {};



const client = redis.createClient({
host: process.env.REDIS_HOST,
 port: process.env.REDIS_PORT
//tls:{
//key: fs.readFileSync('DigiCertGlobalRootCA.crt.pem'),
//cert: fs.readFileSync('DigiCertGlobalRootCA.crt.pem'),
//
//  ca: [ fs.readFileSync('DigiCertGlobalRootCA.crt.pem') ]
//
//    }

 } );
//key: fs.readFileSync('path_to_keyfile', encoding='ascii'),
//cert: fs.readFileSync('path_to_certfile', encoding='ascii'),
//tls: {
//ca: [ fs.readFileSync('DigiCertGlobalRootCA.crt.pem') ]
//
// }
//
//client.on('error', function (err) {
//  console.log('Error'+ err);})
//  client.on('connect', function (err) {
//  console.log('Connected to Redis');
//});
//
//client.on('reconnecting', function (err) {
//  console.log('Reconnecting to Redis');
//});
//
//
//client.on('end', function (err) {
//  console.log('Disconnected from Redis');
//});
//
//
//client.connect( ).then( () => {
//  console.log('Connected to Redis');
//
//}
//).catch((err) => {
// console.log(err)
//})
DataBaseRun().then(() => {
  console.log('DataBase connect successfully')}).
  catch((err) => {
console.log(err)
  })
module.exports = db;


// connection
async function DataBaseRun() {
       let connection = await mysql2.createConnection({
        host:host,
        user:users,
        password:password,

  ssl: {
    ca: fs.readFileSync("ca-certificate.crt")

    //cert: fs.readFileSync("ca-certificate.crt.pem")

   // key: fs.readFileSync("ca-key.crt")
      }
                });

       if (!connection) {
               client.on('disconnected!', () => {
              console.log('Database connection is disconnected.');
              client.end()
              })
       } else {//connect data base if exits

              console.log('Connecting to data base...');
              await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`, 'default')
              await connection.query(`USE \`${database}\`;`, 'default')

              //Create admin user

           await connection.query(`GRANT ALL PRIVILEGES ON \`${database}\`.* TO \`${users}\`;`, 'default')

              const sequelize = new Sequelize(
                     database,
                     users,
                     password,
                     {
                            host: host,
                            dialect: dialect,
                             port: port,
                            dialectOptions: {
                                   ssl: {
                                        rejectUnauthorized: true,
                                           ca: fs.readFileSync("ca-certificate.crt")

                                         //  cert: fs.readFileSync("ca-certificate.crt.pem"),

                                          // key: fs.readFileSync("ca-key.crt")
                                  }
                             },
                            define: {
                                   timestamps: false,
                                   freezeTableName: false
                            }
                     }
              )
              if (!sequelize) throw new Error('Couldn\'t connect to database ' + database);
              db.Sequelize = Sequelize;
              db.sequelize = sequelize;
              db.User = User.User(sequelize);
              db.Music = Music.Music(sequelize);
              db.Employee = Employee(sequelize);
              db.Image = Image.Image(sequelize);
              db.Video = Video.Video(sequelize);
              db.Comment = Comment(sequelize);
              db.User_Profile = User_Profile.User_Profile(sequelize);
              db.Profile = Profile.Profile(sequelize);
              db.Product = Product.Product(sequelize);
              db.Message = Message(sequelize);
              db.Order = Order.Order(sequelize);
              db.Message = Message(sequelize);
          
              await sequelize.sync({ alter: true }).catch(
                     err =>
                            createError(err.message)
              );
       }
}

// Printing object for process.env
let no_env = 0;
// Calling the process.env function
let env = process.env;
// Traversing through the returned data
for (let key in env) {
       // Printing values
       console.log(key + ":\t\t\t" + env[key]);
       no_env++;
}
// Printing total count
console.log("total no of values available = " + no_env);
// Accessing fields one by one
console.log("operating system: " + env['OS']);
console.log("userprofile: " + env['USERPROFILE']);
console.log("public directory: " + env['PUBLIC']);