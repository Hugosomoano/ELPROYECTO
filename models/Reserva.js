const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    gimnasio_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'gimnasios',
            key: 'id'
        }
    }
});

module.exports = Reserva;
