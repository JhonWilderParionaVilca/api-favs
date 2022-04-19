import { Router } from "express";
import { requestValidator } from "../../shared/validators/requestValidator";
import { createUserController } from "../controllers/createUserController";
import { createUserValidator } from "../validators/createUserValidator";

const router: Router = Router();

router.post(
  "/signUp",
  requestValidator(createUserValidator),
  createUserController
);

export default router;
