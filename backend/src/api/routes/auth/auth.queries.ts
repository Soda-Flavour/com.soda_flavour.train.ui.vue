import Knex from "knex";
import knex from "../../database/connection";

export default class AuthQueries {
  static isExistId(reqParams: any): Promise<Knex<any, unknown[]>> {
    return knex
      .select("teacher_id", "login_id", "login_hash")
      .from("teacher")
      .where("login_id", "=", reqParams["login_id"])
      .first();
  }
}
