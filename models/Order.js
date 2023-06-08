


const {
    Model, DataTypes
} = require('sequelize');

exports.Order = (sequelize) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Order.belongsTo(models.User, {}).hasMany(models.Order);
            
        }
    }
    Order.init({
        Name: DataTypes.STRING,

        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};

