import { Router } from "express";
import { requestValidator } from "../../shared/validators/requestValidator";
import { createUserController } from "../controllers/createUserController";
import { loginUserController } from "../controllers/loginUserController";
import { createUserValidator } from "../validators/createUserValidator";
import { loginUserValidator } from "../validators/loginUserValidator";

const router: Router = Router();

router.post(
  "/signUp",
  requestValidator(createUserValidator),
  createUserController
);
router.post(
  "/login",
  requestValidator(loginUserValidator),
  loginUserController
);

export default router;
