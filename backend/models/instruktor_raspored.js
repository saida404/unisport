import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Instruktori from "./instruktori.js";
import Termini from "./termini.js";

const InstruktorRaspored = sequelize.define('instruktor_raspored', {
  id_instruktor_raspored: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true },
  instruktor_id: { 
    type: DataTypes.INTEGER, 
    references: { model: Instruktori, key: "id_instruktori" }, 
    onDelete: "CASCADE" 
  },
  termin_id: { 
    type: DataTypes.INTEGER, 
    references: { model: Termini, key: "id_termini" }, 
    onDelete: "CASCADE" 
  },
  napomena: { 
    type: DataTypes.TEXT }
}, {
  tableName: "instruktor_raspored",
  timestamps: false
});

module.exports = InstruktorRaspored;
