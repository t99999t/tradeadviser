

const {
    Model, DataTypes
} = require('sequelize');

exports.Video = (sequelize) => {
    class Video extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Video.belongsTo(models.User, {
                foreignKey: {
                    name: 'user_id',
                    allowNull: false
                }
            });
        
        }
    }
    Video.init({
        name: DataTypes.STRING,
      _byId: DataTypes.INTEGER,


    }, {
        sequelize,
        modelName: 'Video',
    })
    return Video
};