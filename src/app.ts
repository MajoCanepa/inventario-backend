import { Server } from "./server";
import { AppRouter } from "./router/AppRouter";
import { enviroments } from "./config/environments";
import { DB } from "./database/db";


(
    async () => {
        // Creación del servidor
        const server = new Server({
            port: enviroments.port,
            routes: AppRouter.routes
        });

        // Conexión a la base de datos
        const db = new DB({
            mongoUrl: enviroments.MONGO_URL!,
            dbName: enviroments.DB_NAME!
        });
        await db.connect();        
        
        // Inicializa el servidor
        server.start();
    }
)()