
'use strict';


const {Model, DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Message.belongsTo(models.User, {
                foreignKey: 'author',
                as: 'author'
            });
            Message.belongsTo(models.User, {
                foreignKey: 'to',
                as: 'to'
            });
            Message.belongsTo(models.User, {
                foreignKey: 'from',
                as: 'from'
            });
        }
    }


    Message.init({
        from: DataTypes.STRING,
        to: DataTypes.STRING,
        author: DataTypes.STRING,
        date: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Message'
    });
    return Message;
};
