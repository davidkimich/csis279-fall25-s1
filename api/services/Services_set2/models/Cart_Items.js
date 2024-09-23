const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/db');


class Cart_Items extends Model {}


Cart_Items.init({
    Cart_Items_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Cart_Items_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Cart_Items',
    tableName: 'Cart_Items',
    timestamps: false,
});

module.exports = { Cart_Items };

