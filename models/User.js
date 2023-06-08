const {Model, DataTypes} = require("sequelize");

let date=  new Date();
exports.User = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.UserGroup.belongsTo(models.User);
      models.User_Profile.belongsTo(models.User);
      models.Profile.belongsTo(models.User);
      models.Product.belongsTo(models.User);
      models.Product_Profile.belongsTo(models.Product);
      models.Comment.belongsTo(models.User);
      models.Video.belongsTo(models.User);
      models.Order.belongsTo(models.User);
      models.Music.belongsTo(models.User);
      models.Message.belongsTo(models.User)
      models.Image.belongsTo(models.User);
      models.Employee.belongsTo(models.User)
    }
  }
  User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false}, // username or password
    firstname: {type: DataTypes.STRING, allowNull: false}, // first name or last name
    lastname: {type: DataTypes.STRING, allowNull: false}, // last name or first name
    middlename: {type: DataTypes.STRING, allowNull: false}, // last name or first name
    email: {type: DataTypes.STRING, allowNull: false}, // email or first name or last name
    password: {type: DataTypes.STRING, allowNull: false, defaultValue: 'nof2345'}, // password or last name
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: 'admin'}, // role user role
    phone: {type: DataTypes.STRING, allowNull: false}, // phone
    sex: {type: DataTypes.STRING, allowNull: false, default:'male'}, //male or female
    birthdate: {type: DataTypes.DATE, allowNull: false,default: date}, // birthday date
    accessToken: {type: DataTypes.STRING, allowNull: false, default: process.env.ACCESS_TOKEN_SECRET}, // access token or access token forEach users
    resetPasswordToken: {type: DataTypes.STRING, allowNull: false, default: process.env.ACCESS_TOKEN_EXPIRY}, // reset password token
    refreshToken: {type: DataTypes.STRING, allowNull: false, default: process.env.REFRESH_TOKEN_EXPIRY},// refresh  token
    Image: {type: DataTypes.STRING, allowNull: true},// image name
        isActive: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},// active
        isDeleted: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}// deleted
  },
      {

    sequelize,
    modelName: 'User'
  });
  return User;
};


