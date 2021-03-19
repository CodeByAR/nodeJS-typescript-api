import { Router } from "express";
import { UserBusinessLogic } from "../../business-logic/user.business-logic";

const userRouter = Router();

userRouter.post("/validation", (req, res) => {
  let userBusinessLogic = new UserBusinessLogic();
  let validationResult = userBusinessLogic.userValidation(req.body);
  return res.json(validationResult);
});

export default userRouter;
