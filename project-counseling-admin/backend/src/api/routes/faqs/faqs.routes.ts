import { Router } from "express";
import faqsController from "./faqs.controller";
import {
  itemCreateValidateMiddleware,
  itemDeleteValidateMiddleware,
  getItemValidateMiddleware,
} from "./faqs.validate";

const faqsContr = new faqsController();

const faqsRouter = Router();

faqsRouter.get(`/:id`, getItemValidateMiddleware, faqsContr.getItem);
faqsRouter.get(`/`, faqsContr.getList);
faqsRouter.put(`/`, faqsContr.updateItem);
faqsRouter.post(`/`, itemCreateValidateMiddleware, faqsContr.createItem);
faqsRouter.delete(`/:id`, itemDeleteValidateMiddleware, faqsContr.deleteItem);

export default faqsRouter;
