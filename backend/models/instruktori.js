const { DataTypes } = require("sequelize");
const sequelize = require("../dbs");


const Instruktori = sequelize.define('instruktori', {
  id_instruktori: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
  },
  ime: {
        type: DataTypes.STRING,
        allowNull: false
  },
  prezime: {
        type: DataTypes.STRING,
        allowNull: false
  },
  telefon: {
        type: DataTypes.STRING
  },
  email: {
        type: DataTypes.STRING
  }},
  {
        tableName: "instruktori",
        timestamps: false
  });

module.exports = Instruktori;