import { Router } from "express";
import activityRouter from "./activity/activity.routes";

const mypageRouter = Router();

mypageRouter.use(`/activity`, activityRouter);

export default mypageRouter;
