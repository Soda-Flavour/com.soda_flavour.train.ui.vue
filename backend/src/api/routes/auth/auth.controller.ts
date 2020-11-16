import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorMsg } from "../../constant/errorMsg";

import HttpException from "../../lib/HttpException";
import JwtAuth from "../../lib/JwtAuth";
import AuthQueries from "./auth.queries";

class authController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { login_id, password: login_hash } = req.body as {
        login_id: string;
        password: string;
      };

      const reqParams = { login_id };
      const resultData = await AuthQueries.isExistId(reqParams);

      if (resultData === undefined) {
        const err = new HttpException(403, "E2201");
        throw err;
      }

      const validPassword = await bcrypt.compare(
        login_hash,
        resultData["login_hash"]
      );
      console.log(validPassword);
      if (!validPassword) {
        const err = new HttpException(403, "E2202");
        res.status(403);
        throw err;
      }

      const payload = {
        teacher_id: resultData["teacher_id"],
        nick: resultData["nick"],
        login_id,
      } as {
        teacher_id: string;
        nick: string;
        login_id: string;
      };

      const access_t: string = await JwtAuth.sign(payload);
      const refresh_t: string = await JwtAuth.refresh(payload);

      res.json({
        result: {
          status: 200,
          message: "로그인에 성공했습니다.",
          data: {
            login_id: login_id,
            access_t,
            refresh_t,
          },
        },
      });
    } catch (error) {
      if (!(error instanceof HttpException)) {
        const _error = new HttpException(403, "E2200");
        next(_error);
      }
      next(error);
    }
  }
}

export default authController;
