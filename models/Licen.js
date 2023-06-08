

const { Model, DataTypes } =require("sequelize");

 class Licen extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Licen.belongsTo(models.User, { foreignKey: 'author' });
            Licen.belongsTo(models.type, { foreignKey: 'type' });
            Licen.belongsTo(models.status, { foreignKey:'status' });
         


        }
    }

module.exports = (sequelize) => {
    Licen.init({
        initDate: DataTypes.STRING,
        expiration: DataTypes.STRING,
        author: DataTypes.STRING,
        code: DataTypes.STRING,
        description: DataTypes.STRING,
        type: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Licen'
    });
    return Licen;
};
