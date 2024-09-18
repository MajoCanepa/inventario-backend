import express, { Router, Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';


interface IServerConfig {
    port: number;
    routes: Router;
}

interface IServer {
    start(): void;
}

export class Server implements IServer { 

    private readonly app: Application = express(); 
    private readonly routes: Router;
    private readonly port: number;

    constructor({ port, routes }: IServerConfig) {
        this.port = port;
        this.routes = routes
        this.middlewares();
    };

    private middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use('/',this.routes);
    };

    // rutas
    

    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en  http://localhost:${this.port}`);
        });
    };


}