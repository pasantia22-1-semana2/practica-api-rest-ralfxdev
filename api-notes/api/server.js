import express from "express";
import cors from "cors";
import routerNote from "./notes/routes/note.route.js"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

//object swagger

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "api-notes",
            version: "1.0.0"
        },
        server: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: [`api/notes/routes/*.js`]

}

export class Server {
    constructor(hostName, port, nameApp) {
        this._hostname = hostName;
        this._port = port;
        this._name = nameApp;
        this._app = express();
        this.initMiddlawares();
        this.initRoutes();
    }

    initMiddlawares() {
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));
        this._app.use(cors())
    }


    initRoutes() {
        this._app.use("/api/v1/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
        this._app.use("/api/v1/note", routerNote)
        this._app.use("/api/v1/home", (req, res) => {
            res.json({ message: "Welcome to API-NOTEs" })
        });
    }

    initServer() {
        try {
            this._app.set('trust proxy', this._hostname);
            this._app.listen(this._port, () => {
                console.log(`Server of ${this._app} running at http://${this._hostname}:${this._port}`)
            });
        } catch (error) {
            console.log(`Error al iniciar el servidor. -> Detalle:${error}`)
        }
    }
}