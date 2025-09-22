import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const KandidatiDjeca = sequelize.define('kandidati_djeca', {
  id_kandidati_djeca: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ime: { type: DataTypes.STRING, allowNull: false },
  prezime: { type: DataTypes.STRING, allowNull: false },
  godine: { type: DataTypes.INTEGER, allowNull: false },
  ime_roditelja: { type: DataTypes.STRING, allowNull: false },
  prezime_roditelja: { type: DataTypes.STRING, allowNull: false },
  telefon_roditelja: { type: DataTypes.STRING, allowNull: false },
  email_roditelja: { type: DataTypes.STRING, allowNull: false },
  adresa: { type: DataTypes.TEXT, allowNull: false },
  broj_obuce: { type: DataTypes.INTEGER },
  nivo: { type: DataTypes.ENUM('pocetnik', 'napredni'), allowNull: false },
  datum_prijave: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "kandidati_djeca",
  timestamps: false
});

module.exports = KandidatiDjeca;
