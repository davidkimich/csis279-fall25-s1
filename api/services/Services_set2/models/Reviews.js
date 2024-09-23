const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/db');


class Reviews extends Model {}


Reviews.init({
    review_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    review_body: {
        type: DataTypes.String,
        allowNull: false
    },
   
}, {
    sequelize,
    modelName: 'Reviews',
    tableName: 'Reviews',
    timestamps: false,
});

module.exports = { Reviews };

