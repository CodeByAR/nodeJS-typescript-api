import { Router } from "express";
const healthCheckRouter = Router();

healthCheckRouter.get("/", (_, res) => {
  res.send("The NodeJS - TypeScript API is working...");
});

export default healthCheckRouter;
