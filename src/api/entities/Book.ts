import { DataTypes } from "sequelize";
import { connection } from "../database/connection";

const Book = connection.define("books", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  book_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categories: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  book_rating: {
    type: DataTypes.NUMBER,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.NUMBER,
  },
  pages: {
    type: DataTypes.NUMBER,
  },
  volume: {
    type: DataTypes.NUMBER,
  },
  edition: {
    type: DataTypes.NUMBER,
  },
  language: {
    type: DataTypes.STRING,
  },
  file: {
    type: DataTypes.STRING,
  }
});

export { Book };
