const { Router } = require("express");
const TagsController = require("../controllers/TagsController");

const tagsRouters = Router();

const tagsController = new TagsController();

tagsRouters.get("/:user_id", tagsController.list);

module.exports = tagsRouters;
