import { Router } from "express";
import { requestValidator } from "../../shared/validators/requestValidator";
import { loginUser } from "../controllers/users.controller";
import { createUserValidator } from "../validators/createUserValidator";

const router: Router = Router();

router.post("/signUp", requestValidator(createUserValidator), loginUser);

export default router;
