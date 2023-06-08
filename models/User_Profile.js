
const {
    Model, DataTypes
} = require('sequelize');

exports.User_Profile = (sequelize) => {
    class User_Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            
            User_Profile.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false,
                    key: 'id',
                    type: DataTypes.INTEGER
                    }
            }

            ).hasMany(models.Profile);

        }
    }

User_Profile.init({

    username: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true},
        selfGranted: DataTypes.BOOLEAN,
        timestamps: DataTypes.DATE
    },
    {
        sequelize,
        modelName: 'User_Profile'

});

return User_Profile;
};



