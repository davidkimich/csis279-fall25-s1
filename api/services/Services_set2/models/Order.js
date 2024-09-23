const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/db');


class Order extends Model {}


Order.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true
    },
    order_shipping_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order_total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    made_on: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'order',
    tableName: 'order',
    timestamps: false,
});

module.exports = { Order };

