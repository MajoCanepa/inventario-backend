import mongoose from 'mongoose'; 

interface IDB {
    mongoUrl: string;
    dbName: string;
}

export class DB {
    private uri: string;
    private nameDB: string;

    constructor({ mongoUrl, dbName }: IDB) {
        this.uri = mongoUrl;
        this.nameDB = dbName;
    };

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