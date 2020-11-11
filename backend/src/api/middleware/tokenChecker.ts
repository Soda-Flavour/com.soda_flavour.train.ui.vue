import jwt from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";
import "dotenv/config";

export default class TokenChecker {
  private static readonly jwt_passphrase: string | undefined =
    process.env.JWT_SECRET;

  /**
   * @param req
   * @param res
   * @param next
   */
  public static verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const bearerHeader: string | undefined = req.headers["authorization"];
    if (bearerHeader !== undefined) {
      const bearerToken: string = bearerHeader.split(" ")[1];
      jwt.verify(
        bearerToken,
        <string | Buffer>TokenChecker.jwt_passphrase,
        (err) => {
          if (err) {
            res.sendStatus(403);
            return;
          }
          next();
        }
      );
    } else {
      res.sendStatus(403);
    }
  }
}
