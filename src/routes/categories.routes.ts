import { Router } from "express";
import multer from "multer";

import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

// const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController().handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
