import { Server } from "./server";
import { AppRouter } from "./router/AppRouter";
import { enviroments } from "./config/environments";
import { DB } from "./database/db";
import { UserService } from "./users/user.service";


(
    async () => {
        // Creación del servidor
        const server = new Server({
            port: enviroments.port,
            routes: AppRouter.routes
        });

        // Conexión a la base de datos
        //! APLICANDO EL PATRON SINGLETON(Lo que esta comentado)
        // const dbConfig = {
        //     mongoUrl: enviroments.MONGO_URL!,
        //     dbName: enviroments.DB_NAME!
        // };
        const db = new DB({
            mongoUrl: enviroments.MONGO_URL!,
            dbName: enviroments.DB_NAME!
        });


        // aca iria:
        // const db = DB.getInstance(dbConfig);
        //await db.connect();
        await db.connect();        

        // carga de usuarios desde el archivo JSON
        const userService = new UserService();
        await userService.loadUsers();
        
        // Inicializa el servidor
        server.start();
    }
)()