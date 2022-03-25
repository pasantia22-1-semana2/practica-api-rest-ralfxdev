import express from "express";
import { NoteController } from "../controllers/note.controllers.js";

const noteController = new NoteController();

const routerNote = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Notes:
 *          type: object
 *          properties:
 *              title: 
 *                type: string
 *                description: title of note
 *              content: 
 *                type: string
 *                description: content of note
 *              status: 
 *                 type: boolen
 *                 description: status of note
 *          required:
 *              - title
 *              - content
 *              - status
 *          example:
 *              title: first note
 *              content: my first note
 *              status: false
 */

/**
 * @swagger
 * /api/v1/note:
 *  get:
 *    summary: return all notes
 *    tags: [note]   
 *    responses:
 *      200:
 *        description: all notes!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *                    
 */

//Ruta para obtener todas las notas
routerNote.get("/", noteController.getAllNotes);

/**
 * @swagger
 * /api/v1/note/{id}:
 *  get:
 *    summary: return one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id   
 *    responses:
 *      200:
 *        description: all notes!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: note not found                 
 */

//Ruta para obtener una sola nota
routerNote.get("/:id", noteController.getOneNote);

/**
 * @swagger
 * /api/v1/note:
 *  post:
 *    summary: create a new note
 *    tags: [note]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notes'
 *    responses:
 *      200:
 *        description: new note created!
 *      400:
 *        description: not found!
 *      500:
 *        description: intern error server!
 * 
 */

//Ruta para obtener todas las notas
routerNote.post("/", noteController.createNewNote);

/**
 * @swagger
 * /api/v1/note/{id}:
 *  delete:
 *    summary: delete one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id   
 *    responses:
 *      200:
 *        description: note is deleted!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: note not found and not deleted                
 */

//Ruta para borrar una nota
routerNote.delete("/:id", noteController.deleteNote);

/**
 * @swagger
 * /api/v1/note/{id}:
 *  put:
 *    summary: update one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notes'   
 *    responses:
 *      200:
 *        description: note updated!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: user not found                 
 */

//Ruta para actualizar una nota
routerNote.put("/", noteController.updateNote);

export default routerNote;