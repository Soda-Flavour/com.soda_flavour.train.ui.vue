import jwt from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";
import "dotenv/config";

export default class JwtAuth {
  private static readonly jwt_passphrase: string | undefined =
    process.env.JWT_SECRET;

  static sign(payload: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.JWT_SECRET!,
        {
          expiresIn: "6h",
        },
        (error, token) => {
          if (error) return reject(error);
          return resolve(token);
        }
      );
    });
  }

  static refresh(payload: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.JWT_SECRET!,
        {
          expiresIn: "10h",
        },
        (error, token) => {
          if (error) return reject(error);
          return resolve(token);
        }
      );
    });
  }
}
