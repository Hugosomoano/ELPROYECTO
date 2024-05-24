const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Promocion = sequelize.define('Promocion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gimnasio_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'gimnasios',
            key: 'id'
        }
    }
});

module.exports = Promocion;
