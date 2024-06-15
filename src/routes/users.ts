import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import adminMiddleware from "../middlewares/admin";
import { errorHandler } from "../error-handler";
import { address, deleteAddress, listAddress } from "../controllers/users";

const usersRoutes = Router();

usersRoutes.post(
  "/address",
  [authMiddleware, adminMiddleware],
  errorHandler(address)
);
usersRoutes.delete(
  "/address/:id",
  [authMiddleware, adminMiddleware],
  errorHandler(deleteAddress)
);
usersRoutes.get(
  "/address",
  [authMiddleware, adminMiddleware],
  errorHandler(listAddress)
);

export default usersRoutes;
