import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public apellido!: string;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    apellido: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "usuarios",
  }
);

export default Usuario;
