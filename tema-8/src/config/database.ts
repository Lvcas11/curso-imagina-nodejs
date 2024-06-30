import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// const database = process.env.RENDER_DATABASE || "";
//const username = process.env.RENDER_USERNAME || "";
// const password = process.env.RENDER_PASSWORD || "";
// const host = process.env.RENDER_HOST || "";
// const port = parseInt(process.env.RENDER_PORT as string) || 1234;

const port = "5432"
const host = "dpg-cpdjdjdds78s73ejinng-a.frankfurt-postgres.render.com"
const database = "curso_22wn";
const username = "curso_22wn_user"
const password = "jl6NSNld47F6tV7DkKmpFgQbCHC3eH3k"

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
