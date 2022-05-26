const { Router } = require("express");
const NotesController = require("../controllers/NotesController");

const notesRouters = Router();

const notesController = new NotesController();

notesRouters.post("/:user_id", notesController.create);
notesRouters.get("/:id", notesController.show);

module.exports = notesRouters;
