import { Note, NoteModels } from "../models/note.models.js";


const noteModels = new NoteModels();

export class NoteController {
    constructor() { }

    //Método para responder la ruta obtener todas las notas
    getAllNotes(req, res) {
        let allNotes = noteModels.all();
        res.json(allNotes);
    }

    //Crear nueva nota
    async createNewNote(req, res) {
        let {title, content, status } = req.body;
        const newNote = new Note(title, content, status);
        let result = await noteModels.save(newNote);
        if (result > 0) {
            return res.json({ message: "Created one note" });
        }
        return res.json({ message: "Error" });
    }

    //Obtener una nota
    getOneNote(req, res) {
        const id = req.params.id
        let oneNote = noteModels.findByID(id);
        res.json(oneNote);
    }
}