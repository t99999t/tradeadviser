const {Model, DataTypes} = require("sequelize");

let date=  Date().now();
exports.Users = (sequelize) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.UserGroup.belongsTo(models.Users);
      models.User_Profile.belongsTo(models.Users);
      models.Profile.belongsTo(models.Users);
      models.Product.belongsTo(models.Users);
      models.Product_Profile.belongsTo(models.Product);
      models.Comment.belongsTo(models.Users);
      models.Video.belongsTo(models.Users);
      models.Order.belongsTo(models.Users);
      models.Music.belongsTo(models.Users);
      models.Message.belongsTo(models.Users)
      models.Image.belongsTo(models.Users);
      models.Employee.belongsTo(models.Users)
    }
  }
  Users.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false}, // username or password
    firstname: {type: DataTypes.STRING, allowNull: false}, // first name or last name
    lastname: {type: DataTypes.STRING, allowNull: false}, // last name or first name
    middlename: {type: DataTypes.STRING, allowNull: false}, // last name or first name
    email: {type: DataTypes.STRING, allowNull: false}, // email or first name or last name
    password: {type: DataTypes.STRING, allowNull: false, defaultValue: 'nof2345'}, // password or last name
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: 'user'}, // role user role
    phone: {type: DataTypes.STRING, allowNull: false}, // phone
    sex: {type: DataTypes.STRING, allowNull: false, default:'Male'}, //male or female
    birthdate: {type: DataTypes.DATE, allowNull: false,default: date}, // birthday date
    accessToken: {type: DataTypes.STRING, allowNull: false, default: process.env.ACCESS_TOKEN_SECRET}, // access token or access token forEach users
    resetPasswordToken: {type: DataTypes.STRING, allowNull: false, default: process.env.ACCESS_TOKEN_EXPIRY}, // reset password token
    refreshToken: {type: DataTypes.STRING, allowNull: false, default: process.env.REFRESH_TOKEN_EXPIRY},// refresh  token
    Image: {type: DataTypes.STRING, allowNull: true},// image name
        isActive: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}// active
  },

      {

    sequelize,
    modelName: 'Users'
  });
  return Users;
};


