import express from "express";
import Joi from "joi";
import HttpException from "../../lib/HttpException";
import { errorMsg } from "../../constant/errorMsg";

export default class AuthValidate {
  static loginValidateMiddleware = function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const loginSchemaValidate = Joi.object().keys({
      login_id: Joi.string().required().trim().label("E2203"),
      password: Joi.string()
        .min(8)
        .max(18)
        .regex(/[$&+,:;=?@#|'<>.^*()%!-]/)
        // .regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/[0-9]/)
        .required()
        .label("E2204"),
    });

    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    const { error, value } = loginSchemaValidate.validate(req.body, options);

    if (error) {
      const errCode = error?.details[0].context?.label || "E1111";
      const err = new HttpException(433, errCode);
      console.log(err);
      next(err);
    } else {
      // on success replace req.body with validated value and trigger next middleware function
      req.body = value;
      next();
    }
  };
}
