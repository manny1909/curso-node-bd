const {Model, DataTypes, Sequelize} = require('sequelize');

const ORDER_TABLE = 'orders'
const OrderSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User', // Nombre de la tabla referenciada
            key: 'id',      // Clave primaria de la tabla referenciada
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product', // Nombre de la tabla referenciada
            key: 'id',        // Clave primaria de la tabla referenciada
        },
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // Otros campos que puedas necesitar en la relación entre User y Product
};

class Order extends Model {
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName:ORDER_TABLE,
            modelName:'Order',
            timestamp: true,
        }
    }
}
module.exports = {
    ORDER_TABLE,
    OrderSchema,
    Order,
}
