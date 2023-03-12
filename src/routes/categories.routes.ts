import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
