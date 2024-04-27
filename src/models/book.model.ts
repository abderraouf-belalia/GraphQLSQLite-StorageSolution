import { sequelize } from ".";
import { Model, DataTypes } from "sequelize";

export class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    author: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, 
    modelName: 'Book',
  },
);
