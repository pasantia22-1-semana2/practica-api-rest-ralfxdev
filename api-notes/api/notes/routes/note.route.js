import express from "express";

const routerNote = express.Router();

//Ruta para obtener todas las notas
routerNote.get("/", (req, res)=>{
    res.json({message: "I am rout GET"})
});

//Ruta para obtener todas las notas
routerNote.post("/", (req, res)=>{
    res.json({message: "I am rout POST"})
});

//Ruta para obtener una sola nota
routerNote.get("/:id", (req, res)=>{
    res.json({message: "I am rout GET one note"})
});

//Ruta para borrar una nota
routerNote.delete("/:id", (req, res)=>{
    res.json({message: "I am rout GET delete one note"})
});

//Ruta para crear una nota
routerNote.put("/:id", (req, res)=>{
    res.json({message: "I am rout GET create one note"})
});

export default routerNote;