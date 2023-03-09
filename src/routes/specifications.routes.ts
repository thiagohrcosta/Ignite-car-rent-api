import { Router } from "express";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post("/", (req, res) => {});

export { specificationsRoutes };
