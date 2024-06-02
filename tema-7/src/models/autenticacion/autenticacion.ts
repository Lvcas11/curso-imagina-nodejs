// models/autenticacion.ts

import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

class Autenticacion extends Model {
  public id!: number;
  public token!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Autenticacion.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.TEXT, // Cambiar el tipo de datos a TEXT
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "autenticacion", // Nombre de la tabla en la base de datos
  }
);

export default Autenticacion;
