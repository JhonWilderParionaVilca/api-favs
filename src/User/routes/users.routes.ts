import { Router } from "express";
import { loginUser } from "../controllers/users.controller";

const router: Router = Router();

router.post("/login", loginUser);

export default router;
