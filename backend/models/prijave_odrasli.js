const { DataTypes } = require("sequelize");
const sequelize = require("../dbs.js");
const Termini = require("./termini.js");
const KandidatiOdrasli = require("./kandidati_odrasli.js");

const PrijaveOdrasli = sequelize.define('prijave_odrasli', {
  id_prijave: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  termin_id: { 
    type: DataTypes.INTEGER,
    references: { model: Termini, key: "id_termini" },
    onDelete: "CASCADE"
  },
  kandidat_id: { 
    type: DataTypes.INTEGER,
    references: { model: KandidatiOdrasli, key: "id_kandidati_odrasli" },
    allowNull: false,
    onDelete: "CASCADE"
  },
  datum_prijave: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "prijave_odrasli",
  timestamps: false
});

module.exports = PrijaveOdrasli;
