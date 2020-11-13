import { errorMsg } from "../constant/errorMsg";

class HttpException extends Error {
  status: number;
  message: string;
  errorCode: string;
  constructor(status: number, errorCode: string, message: string = "") {
    super(message);
    this.status = status;
    this.message = errorMsg[errorCode];
    this.errorCode = errorCode;
  }
}

export default HttpException;
