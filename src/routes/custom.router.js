import express from "express";

import CustomService from "../services/custom.service";
import { getCustomSchema } from "../schemas/custom.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const customService = new CustomService();

router.get(
  "/",
  validatorHandler(getCustomSchema, `query`),
  (req, res, next) => {
    try {
      const result = customService.someAction(req.query);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
