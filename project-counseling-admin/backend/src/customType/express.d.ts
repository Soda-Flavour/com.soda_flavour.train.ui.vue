// interface UserTokenData {
//   teacher_id: string;
//   login_id: string;
//   iat: number;
//   exp: number;
// }

// declare namespace Express {
//   export interface Request {
//     user?: object;
//   }
// }

declare namespace Express {
  interface Request {
    user: object;
  }
}
