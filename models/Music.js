
const { Model, DataTypes} = require("sequelize");

exports.Music = (sequelize) => {

    class Music extends Model {

        static associate(models) {
            Music.belongsTo(models.User, {}).hasMany(models.Music);
          
        };
    }
    Music.init({
        title: DataTypes.STRING,
        text: DataTypes.STRING,
        type: DataTypes.STRING,
        author: DataTypes.STRING,
        artist: DataTypes.STRING,
        date: DataTypes.STRING
    }, { sequelize, modelName: 'Music' });

    return Music;

}