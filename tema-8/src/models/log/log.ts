// src/models/logs/log.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

class Log extends Model {
  public id!: number;
  public level!: string;
  public message!: string;
  public timestamp!: Date;
}

Log.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "logs",
  }
);

export default Log;
