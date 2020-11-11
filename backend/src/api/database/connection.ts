import Knex from "knex";

import { knexConfig } from "./knexfile";

const environment = process.env.NODE_ENV || "development";
const connection = Knex(knexConfig[environment]);

export default connection;
