import express from "express";
import Joi from "joi";
import HttpException from "../../lib/HttpException";
import { errorMsg } from "../../constant/errorMsg";

export const itemCreateValidateMiddleware = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const SchemaValidate = Joi.object().keys({
    title: Joi.string().required().trim().label("E2101"),
    content: Joi.string().required().trim().label("E2101"),
  });

  // schema options
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  const { error, value } = SchemaValidate.validate(req.body, options);

  if (error) {
    const errCode = error?.details[0].context?.label || "E1111";
    const err = new HttpException(433, errorMsg[errCode], errCode);
    next(err);
  } else {
    // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
};

export const itemDeleteValidateMiddleware = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const SchemaValidate = Joi.object().keys({
    id: Joi.number().required().label("E2101"),
  });

  // schema options
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  const { error, value } = SchemaValidate.validate(req.params, options);

  if (error) {
    const errCode = error?.details[0].context?.label || "E1111";
    const err = new HttpException(433, errorMsg[errCode], errCode);
    next(err);
  } else {
    // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
};

export const getItemValidateMiddleware = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const SchemaValidate = Joi.object().keys({
    id: Joi.number().required().label("E2101"),
  });

  // schema options
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };

  const { error, value } = SchemaValidate.validate(req.params, options);

  if (error) {
    const errCode = error?.details[0].context?.label || "E1111";
    const err = new HttpException(433, errorMsg[errCode], errCode);
    next(err);
  } else {
    // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
};
