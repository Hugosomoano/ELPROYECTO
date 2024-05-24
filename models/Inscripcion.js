const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inscripcion = sequelize.define('Inscripcion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_inscripcion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cuota_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cuotas',
            key: 'id'
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    }
});

module.exports = Inscripcion;
