const Router = require("express");
const categoryController = require("../controllers/category-controller");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getCatetory);

module.exports = categoryRouter;
