import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

/**
 * Modelo de datos para un Usuario.
 * @extends Model
 */
class Usuario extends Model {
  /**
   * ID único del usuario.
   * @type {number}
   */
  public id!: number;

  /**
   * Nombre del usuario.
   * @type {string}
   */
  public nombre!: string;

  /**
   * Apellido del usuario.
   * @type {string}
   */
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - apellido
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: ID único del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         apellido:
 *           type: string
 *           description: Apellido del usuario
 */
