import express from "express";

/**
 * Import Routes
 */
import customRouter from "./custom.router";

const route = (app) => {
  const router = express.Router();
  app.use("/", router);

  /**
   * Routes
   */
  router.use("/custom", customRouter);
  
};

export default route;
