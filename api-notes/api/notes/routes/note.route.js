import express from "express";
import { NoteController } from "../controllers/note.controllers.js";

const noteController = new NoteController();

const routerNote = express.Router();

//Ruta para obtener todas las notas
routerNote.get("/", noteController.getAllNotes);

//Ruta para obtener todas las notas
routerNote.post("/", noteController.createNewNote);

//Ruta para obtener una sola nota
routerNote.get("/:id", noteController.getOneNote);

//Ruta para borrar una nota
routerNote.delete("/:id", (req, res) => {
    res.json({ message: "I am rout GET delete one note" })
});

//Ruta para crear una nota
routerNote.put("/:id", (req, res) => {
    res.json({ message: "I am rout GET create one note" })
});

export default routerNote;