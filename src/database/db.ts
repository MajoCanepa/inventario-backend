import mongoose from 'mongoose'; 

interface IDB {
    mongoUrl: string;
    dbName: string;
}

//! APLICANDO EL PATRON SINGLETON (lo que esta comentado)
export class DB {
    // aca iria: 
    // private static instance: DB;
    private uri: string;
    private nameDB: string;

    constructor({ mongoUrl, dbName }: IDB) {
        this.uri = mongoUrl;
        this.nameDB = dbName;
    };

    // aca iria:
    // public static getInstance(config: IDB): DB {
    //     if (!DB.instance) {
    //         DB.instance = new DB(config);
    //     }
    //     return DB.instance;
    // }

     async connect() {
        try {
            await mongoose.connect(this.uri, {
                dbName: this.nameDB
            });
            console.log('Base de datos conectada');
        } catch (error) {
            console.error('Error al conectar la base de datos');
        }
    };
};