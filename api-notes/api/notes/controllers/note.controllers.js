import { Note, NoteModels } from "../models/note.models.js";
import { response } from "../../../response/response.js"


const noteModels = new NoteModels();

export class NoteController {
    constructor() { }

    //Método para responder la ruta obtener todas las notas
    getAllNotes(req, res) {
        try {
            let allNotes = noteModels.all();
            response.succes(req, res, allNotes, 200)
        } catch (error) {
            response.error(req, res, null, 500)
        }
    }

    //Crear nueva nota
    async createNewNote(req, res) {
        let { title, content, status } = req.body;
        if (title != undefined && content != undefined && status != undefined) {
            try {

                const newNote = new Note(title, content, status);
                let result = await noteModels.save(newNote);
                if (result == 0) {
                    let messageNOT = 'No Create Note';
                    response.error(req, res, messageNOT, 500)
                }
                else {
                    let messageOK = 'Note Created';
                    response.succes(req, res, messageOK, 200)
                }
            } catch (error) {
                console.log(error)
                response.error(req, res, null, 500);
            }
        }
        else {
            let messageERROR = 'Enter all dates';
            response.error(req, res, messageERROR, 500)
        }

    }

    //Obtener una nota
    getOneNote(req, res) {
        let id = req.params.id
        let oneNote = noteModels.findByID(id);
        if(oneNote){
            response.succes(req, res, oneNote, 200)
        }
        else{
            let messageNOTFOUND = 'Not Found'
            response.error(req, res, messageNOTFOUND, 404)
        }
    }

    //Actualiza una nota
    updateNote(req, res) {
        let result = noteModels.updateByID(req.body);
        if(result){
            response.succes(req, res, result, 200)
        }
    }

    //Eliminar una nota
    deleteNote(req, res) {
        let id = req.params.id;
        let result = noteModels.deleteById(id);
        if(result){
            response.succes(req, res, result, 200);
        }
    }

}