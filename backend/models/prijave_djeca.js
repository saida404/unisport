const { DataTypes } = require("sequelize");
const sequelize = require("../dbs");

const Termini = require("./termini.js"); 

const PrijaveDjeca = sequelize.define('prijave_djeca', {
  id_prijave: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true },
  termin_id: { 
      type: DataTypes.INTEGER,
      references: { model: Termini, key: "id_termini" },
      onDelete: "CASCADE"
  },
  kandidat_id: { 
      type: DataTypes.INTEGER,
      references: { model: KandidatiDjeca, key: "id_kandidati_djeca" },
      allowNull: false,
      onDelete: "CASCADE"
  },
  datum_prijave: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW }
}, {
  tableName: "prijave_djeca",
  timestamps: false
});

module.exports = PrijaveDjeca;
