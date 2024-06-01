import { Sequelize } from "sequelize";

const database = "curso";
const username = "lucasgiuri";
const password = "curso";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
});

export default sequelize;
