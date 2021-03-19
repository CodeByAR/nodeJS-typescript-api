import { Router } from "express";

const userRouter = Router();

userRouter.get("/status", (_, res) => {
  console.log("I m here!");
  return res.json({
    "status": "ok",
  });
});

export default userRouter;