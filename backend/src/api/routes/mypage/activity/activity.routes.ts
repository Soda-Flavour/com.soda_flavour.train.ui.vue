import { Router } from "express";
import activityController from "./activity.controller";
// import {
//   itemCreateValidateMiddleware,
//   itemDeleteValidateMiddleware,
//   getItemValidateMiddleware,
// } from "./faqs.validate";

const activityContr = new activityController();

const faqsRouter = Router();

// faqsRouter.get(`/:id`, getItemValidateMiddleware, faqsContr.getItem);
// faqsRouter.get(`/`, faqsContr.getList);
// faqsRouter.put(`/`, faqsContr.updateItem);
// faqsRouter.post(`/`, itemCreateValidateMiddleware, faqsContr.createItem);
// faqsRouter.delete(`/:id`, itemDeleteValidateMiddleware, faqsContr.deleteItem);

export default faqsRouter;
