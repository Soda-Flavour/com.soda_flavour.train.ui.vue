import Knex from "knex";
import knex from "../../../database/connection";

export function getList(): Promise<Knex<any, unknown[]>> {
  return knex.select("*").from("faqs");
}

export function getItemDB(reqParams: any): Promise<Knex<any, unknown[]>> {
  return knex
    .select("*")
    .from("faqs")
    .where("id", "=", reqParams["id"])
    .first();
}

export async function updateItemDB(reqParams: any) {
  try {
    console.log("params", reqParams);
    await knex.transaction(async (trx) => {
      const updateResult: number = await trx("faqs")
        .where({ id: reqParams["id"] })
        .update({
          title: reqParams["title"],
          content: reqParams["content"],
        });
      console.log("updateResult", updateResult);

      return true;
    });
  } catch (error) {
    console.log("tran에러 발생");
    console.error(error);
    return false;
  }
}

export function isExistEmail(reqParams: any): Promise<Knex<any, unknown[]>> {
  return knex
    .select("id", "nick", "email", "password")
    .from("t_user")
    .where("email", "=", reqParams["email"])
    .first();
}

export function isExistNickname(reqParams: any): Promise<Knex<any, unknown[]>> {
  return knex
    .select("email")
    .from("t_user")
    .where("email", "=", reqParams["nick"])
    .first();
}

export async function createUser(userDataParams: any) {
  try {
    await knex.transaction(async (trx) => {
      const insertedUserId: number = await trx("t_user").insert(userDataParams);
      const _result = await trx("t_user_physical").insert({
        ["t_user_id"]: insertedUserId,
      });
      return true;
    });
  } catch (error) {
    console.log("tran에러 발생");
    console.error(error);
    return false;
  }
}

export async function createItem(DataParams: any) {
  try {
    await knex.transaction(async (trx) => {
      const createItemId: number = await trx("faqs").insert(DataParams);
      return true;
    });
  } catch (error) {
    console.log("tran에러 발생");
    console.error(error);
    return false;
  }
}

export async function deleteItem(DataParams: any) {
  try {
    console.log("pramae", DataParams);
    await knex.transaction(async (trx) => {
      const deleteResultCnt: number = await trx("faqs").where(DataParams).del();
      if (deleteResultCnt > 0) return true;
      return false;
    });
  } catch (error) {
    console.log("tran에러 발생");
    console.error(error);
    return false;
  }
}
