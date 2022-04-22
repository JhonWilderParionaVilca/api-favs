import { Router } from "express";
import { userTokenVerification } from "../../shared/middlewares/userTokenVerification";
import { requestValidator } from "../../shared/validators/requestValidator";
import { createFavsController } from "../controllers/createFavsController";
import { getFavController } from "../controllers/getFavController";
import { getFavsController } from "../controllers/getFavsController";
import { createListFavsValidator } from "../validators/createFavValidator";

const router: Router = Router();

router.post(
  "/favs",
  userTokenVerification,
  requestValidator(createListFavsValidator),
  createFavsController
);

router.get("/favs", userTokenVerification, getFavsController);
router.get("/favs/:id", userTokenVerification, getFavController);

export default router;
