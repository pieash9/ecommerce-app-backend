import { Router } from "express";
import { errorHandler } from "../error-handler";
import { createProduct } from "../controllers/products";
import { authMiddleware } from "../middlewares/auth";

const productsRoutes: Router = Router();

productsRoutes.post("/", [authMiddleware], errorHandler(createProduct));

export default productsRoutes;
