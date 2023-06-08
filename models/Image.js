const {Model, DataTypes} = require("sequelize");

exports.Image = (sequelize) => {
    class Image extends Model {
        static associate(models) {
            Image.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                    key: 'id',
                },
            });
        }
    }

    Image.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        title: {type: DataTypes.STRING, allowNull: true, defaultValue : null},
        url: {type: DataTypes.STRING, allowNull: false,defaultValue : ''},
    }, {sequelize, modelImage: 'image'});
return Image;
}
