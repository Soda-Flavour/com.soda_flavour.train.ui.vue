import express from "express";

// import { auth } from "./routes/auth/auth.routes";
import { userRouter } from "./user/user.routes";
import authRouter from "./auth/auth.routes";
import faqsRouter from "./faqs/faqs.routes";
import mypageRouter from "./mypage/mypage.routes";
class Routes {
  public router: express.Router = express.Router();

  constructor() {
    this.routerList();
    this.router.use("/user", userRouter);
    this.router.use("/auth", authRouter);
    this.router.use("/faqs", faqsRouter);
    this.router.use("/mypage", mypageRouter);

    // switch (NODE_ENV) {
    //   case "production":
    //     this.basePath = "/app/dist";
    //     break;
    //   case "development":
    //     this.basePath = "/app/public";
    //     break;
    // }
  }

  private routerList(): void {
    this.router.get(`/`, (req: express.Request, res: express.Response) => {
      res.json({
        message: "하하하",
      });
    });
  }
}

export const router = new Routes().router;
