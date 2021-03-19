import { Router } from "express";
import { UserBusinessLogic } from "../../business-logic/user.business-logic";

const userRouter = Router();

userRouter.get("/status", (_, res) => {
  let userBusinessLogic = new UserBusinessLogic();
  
  return res.json({
    "status": "ok",
  });
});

export default userRouter;