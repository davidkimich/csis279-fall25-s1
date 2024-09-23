const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/db');


class Order_Items extends Model {}


Order_Items.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true
    },
    product_id: {
        type: DataTypes.STRING,
        foreignKey: true,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Order_Items',
    tableName: 'Order_Items',
    timestamps: false,
});

module.exports = { Order };

