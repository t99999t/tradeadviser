const {Model, DataTypes} = require("sequelize");
exports.Profile =


(sequelize) => {
    class Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Profile.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                    key: 'id',
                },
                targetKey: 'id',
                as: 'user',
                username: {type: DataTypes.STRING, allowNull: true},
                email: {type: DataTypes.STRING, allowNull: true}
            })

        }







                                    }
            


    Profile.init({
        username: {type: DataTypes.STRING, allowNull: true},
        email: {type: DataTypes.STRING, allowNull: true},
        Image: {type: DataTypes.STRING, allowNull: true},

    }, {timestamps: false, sequelize,

            modelName: 'Profile'
        }
    )

return Profile;
}
