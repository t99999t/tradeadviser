


const {
    Model, DataTypes
} = require('sequelize');

exports.Product = (sequelize) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            
            Product.belongsTo(models.User, {}).hasMany(models.Product, {}).through
            .foreignKey(models.Product.id);
        }
    }
    Product.init({
        Name: DataTypes.STRING,
        expiration_Date: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};

