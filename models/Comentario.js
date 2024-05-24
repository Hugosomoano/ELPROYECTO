const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comentario = sequelize.define('Comentario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comentario: {
        type: DataTypes.TEXT,
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

module.exports = Comentario;