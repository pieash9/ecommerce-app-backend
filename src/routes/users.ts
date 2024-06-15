import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { errorHandler } from "../error-handler";
import {
  address,
  deleteAddress,
  listAddress,
  updateUser,
} from "../controllers/users";

const usersRoutes = Router();

usersRoutes.post("/address", [authMiddleware], errorHandler(address));
usersRoutes.delete(
  "/address/:id",
  [authMiddleware],
  errorHandler(deleteAddress)
);
usersRoutes.get("/address", [authMiddleware], errorHandler(listAddress));
usersRoutes.put("/", [authMiddleware], errorHandler(updateUser));

export default usersRoutes;
