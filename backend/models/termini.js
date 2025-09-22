const { DataTypes } = require("sequelize");
const sequelize = require("../dbs");


const Termini = sequelize.define('termini', {
    id_termini: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    datum_pocetka: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    datum_kraja: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cijena: { 
        type: DataTypes.NUMERIC, 
        allowNull: false 
    },
    tip_termina: { 
        type: DataTypes.ENUM('grupni_djeca', 'grupni_odrasli','privatni'), 
        allowNull: false 
    },
    nivo: { 
        type: DataTypes.ENUM('pocetnik','napredni'), 
        allowNull: false 
    }}, {
        tableName: "termini",
        timestamps: false
    })

    module.exports = Termini;