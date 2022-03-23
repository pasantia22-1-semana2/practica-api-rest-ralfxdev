import express from "express";
import routerNote from "./notes/routes/note.route.js"

export class Server{
    constructor(hostName, port, nameApp){
        this._hostname = hostName;
        this._port = port;
        this._name = nameApp;
        this._app = express();
        this.initMiddlawares();
        this.initRoutes();
    }

    initMiddlawares(){
        this._app.use(express.json());
        this._app.use(express.urlencoded({extended:true}));
    }

    initRoutes(){
        this._app.use("/api/v1/note",routerNote)
        this._app.use("/api/v1/home",(req, res)=>{
            res.json({message: "Welcome to my API"})
        });
    }

    initServer(){
        try {
            this._app.set('trust proxy', this._hostname);
            this._app.listen(this._port,()=>{
                console.log(`Server of ${this._app} running at http://${this._hostname}:${this._port}`)
            });
        } catch (error) {
            console.log(`Error al iniciar el servidor. -> Detalle:${error}`)
        }
    }
}