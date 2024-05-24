const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Gimnasio = sequelize.define('Gimnasio', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
    },
    email_contacto: {
        type: DataTypes.STRING,
    },
    horario_apertura: {
        type: DataTypes.TIME,
    },
    horario_cierre: {
        type: DataTypes.TIME,
    },
    servicios_ofrecidos: {
        type: DataTypes.TEXT,
    }
});

module.exports = Gimnasio;
