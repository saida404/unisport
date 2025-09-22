import {DataTypes} from "sequelize";
import sequelize from "../dbs";

const Korisnici = sequelize.define('korisnici', {
    id_korisnika: {
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
    email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true
    },
    lozinka_hash: {
            type: DataTypes.TEXT, 
            allowNull: false
    },
    uloga: {
        type: DataTypes.ENUM('admin','instruktor'), 
        allowNull: false
    },
    datum_kreiranja: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
    }, {
        tableName: 'korisnici',
        timestamps: false
    });
module.exports = Korisnici;