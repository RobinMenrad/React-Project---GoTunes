const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Artist = sequelize.define(
  "artist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    kind: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "artist",
    },

    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "internal",
    },
  },
  { tableName: "artists" }
);

module.exports = Artist;
