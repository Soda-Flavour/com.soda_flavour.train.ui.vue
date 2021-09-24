import { Router } from "express";
import authController from "./auth.controller";
import AuthValidate from "./auth.validate";

const AuthContr = new authController();

const authRouter = Router();

// authRouter.post(`/join`, joinValidateMiddleware, AuthContr.create);

authRouter.post(
  `/login`,
  AuthValidate.loginValidateMiddleware,
  AuthContr.login
);

export default authRouter;
