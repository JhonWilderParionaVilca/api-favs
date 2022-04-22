import { Router } from "express";
import { userTokenVerification } from "../../shared/middlewares/userTokenVerification";
import { requestValidator } from "../../shared/validators/requestValidator";
import { addItemsController } from "../controllers/addItemsController";
import { createFavsController } from "../controllers/createFavsController";
import { deleteFavController } from "../controllers/deleteFavController";
import { getFavController } from "../controllers/getFavController";
import { getFavsController } from "../controllers/getFavsController";
import { createListFavsValidator } from "../validators/createFavValidator";
import { updateListFavsValidator } from "../validators/updateFavValidator";

const router: Router = Router();

router.post(
  "/favs",
  userTokenVerification,
  requestValidator(createListFavsValidator),
  createFavsController
);

router.put(
  "/favs/:id",
  userTokenVerification,
  requestValidator(updateListFavsValidator),
  addItemsController
);

router.get("/favs", userTokenVerification, getFavsController);
router.get("/favs/:id", userTokenVerification, getFavController);

router.delete("/favs/:id", userTokenVerification, deleteFavController);

export default router;
