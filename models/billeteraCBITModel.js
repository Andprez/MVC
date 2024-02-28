const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const BilleteraCBITBank = sequelize.define(
  "Billetera_CBITBank",
  {
    idBilletera_CBITBank: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroBilletera: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idEstado_BilleteraCBIT: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = BilleteraCBITBank;
