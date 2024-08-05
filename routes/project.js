const express = require("express");
const router  = express.Router();

const ProjectController = require('../controllers/ProjectController');


router.get("/",      ProjectController.index);
router.get("/:slug", ProjectController.show);


module.exports = { projectRouter: router };