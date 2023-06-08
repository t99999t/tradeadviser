

const {Model, DataTypes} = require("sequelize");


module.exports = (sequelize) => {
        class Employee extends Model {

                /**
                 * Helper method for defining associations.
                 * This method is not a part of Sequelize lifecycle.
                 * The `models/index` file will call this method automatically.
                 */
                static associate(models) {
                        Employee.belongsTo(models.User, {
                        foreignKey: {
                            allowNull: false,
                            key: 'id',
                        },

                },
                        )

                        models.Employee.belongsTo(models.EmployeeGroup);
                        models.EmployeeGroup.belongsTo(models.Employee);
                        models.EmployeeGroup.hasMany(models.Employee);
                        models.Employee_Profile = models.EmployeeGroup.findOne(models.Employee_Profile);  // user profile
                        models.Employee_Profile.belongsTo(models.Employee);
                        models.Employee_Profile.hasMany(models.Employee);
                        models.Employee_Profile.hasMany(models.EmployeeGroup);









                }
        }
        Employee.init({

                date_hires: DataTypes.STRING,
                position: DataTypes.STRING,
                gender: DataTypes.STRING,

                work_status: DataTypes.STRING,
                work_shifts: DataTypes.STRING,

        }, {
                sequelize,
                modelName: 'Employee'
        });
        return Employee;
};
