import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorMsg } from "../../constant/errorMsg";
import HttpException from "../../lib/HttpException";

import {
  getItemDB,
  updateItemDB,
  getList,
  createItem,
  deleteItem,
} from "./faqs.queries";

class faqsController {
  async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const resultData = await getList();
      console.log(resultData);
      if (resultData === undefined) {
        const err = new HttpException(403, errorMsg["E2105"], "E2105");
        throw err;
      }

      res.json({
        result: {
          status: 200,
          message: "리스트입니다.",
          data: {
            list: resultData,
          },
        },
      });
    } catch (error) {
      if (!(error instanceof HttpException)) {
        const _error = new HttpException(403, errorMsg["E2000"], "E2000");
        next(_error);
      }
      next(error);
    }
  }

  async getItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body as {
        id: number;
      };
      const reqParams = { id };

      const resultData = await getItemDB(reqParams);
      console.log("rere", resultData);
      if (resultData === undefined) {
        const err = new HttpException(403, errorMsg["E2105"], "E2105");
        throw err;
      }

      res.json({
        result: {
          status: 200,
          message: "리스트입니다.",
          data: {
            item: resultData,
          },
        },
      });
    } catch (error) {
      if (!(error instanceof HttpException)) {
        const _error = new HttpException(403, errorMsg["E2000"], "E2000");
        next(_error);
      }
      next(error);
    }
  }

  async createItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content } = req.body as {
        title: string;
        content: string;
      };
      const reqParams = { title, content };

      const insertResult = await createItem(reqParams);
      if (insertResult === false) {
        const err = new HttpException(403, errorMsg["E2107"], "E2107");
        throw err;
      }

      res.json({
        result: {
          status: 200,
          message: "생성되었습니다.",
          data: {},
        },
      });
    } catch (error) {
      if (!(error instanceof HttpException)) {
        const _error = new HttpException(403, errorMsg["E2000"], "E2000");
        next(_error);
      }
      next(error);
    }
  }
  async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, title, content } = req.body as {
        id: number;
        title: string;
        content: string;
      };
      const reqParams = { id, title, content };

      const updateResult = await updateItemDB(reqParams);
      if (updateResult === false) {
        const err = new HttpException(403, errorMsg["E2107"], "E2107");
        throw err;
      }

      res.json({
        result: {
          status: 200,
          message: "업데이트되었습니다.",
          data: {},
        },
      });
    } catch (error) {
      if (!(error instanceof HttpException)) {
        const _error = new HttpException(403, errorMsg["E2000"], "E2000");
        next(_error);
      }
      next(error);
    }
  }

  async deleteItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body as {
        id: number;
      };
      const reqParams = { id };

      const deleteResult = await deleteItem(reqParams);
      if (deleteResult === false) {
        const err = new HttpException(403, errorMsg["E2107"], "E2107");
        throw err;
      }

      res.json({
        result: {
          status: 200,
          message: "삭제되었습니다.",
          data: {},
        },
      });
    } catch (error) {
      if (!(error instanceof HttpException)) {
        const _error = new HttpException(403, errorMsg["E2000"], "E2000");
        next(_error);
      }
      next(error);
    }
  }
}

export default faqsController;
