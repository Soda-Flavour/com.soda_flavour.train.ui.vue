import * as express from "express";
import HttpException from "../lib/HttpException";

const verifyToken = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) throw new Error("Not exist auth header");

    const token = authHeader.split(" ")[1];
    if (!token) throw new Error("Not exist token value");

    const user = await Jwt.verify(token);
    req.user = user;
    next();
  } catch (error) {
    console.log("토큰 검증 실패");
    next();
  }
};

export { verifyToken };
