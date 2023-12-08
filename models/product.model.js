const { Model, DataTypes, } = require('sequelize');

const PRODUCT_TABLE = 'products'

const ProductSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
}

class Product extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'product',
            timestamp: true
        }
    }
}
module.exports = {
    PRODUCT_TABLE,
    ProductSchema,
    Product,
}
