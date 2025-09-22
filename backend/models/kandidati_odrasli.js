import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const KandidatiOdrasli = sequelize.define('kandidati_odrasli', {
  id_kandidati_odrasli: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ime: { type: DataTypes.STRING, allowNull: false },
  prezime: { type: DataTypes.STRING, allowNull: false },
  godine: { type: DataTypes.INTEGER, allowNull: false },
  telefon: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  adresa: { type: DataTypes.TEXT, allowNull: false },
  nivo: { type: DataTypes.ENUM('pocetnik','napredni'), allowNull: false },
  datum_prijave: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "kandidati_odrasli",
  timestamps: false
});
module.exports = KandidatiOdrasli;
