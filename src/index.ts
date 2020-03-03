import express = require('express');
import mongoose = require('mongoose');

import indexRoutes from '../routes/indexRoutes';
import ListRouter from '../routes/ListRoutes';

class Server {

    public app: express.Express = express();

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        //
        ////Mongo config
        const MONGO_URI = 'mongodb+srv://root:root@trelloex-4nzrj.mongodb.net/test?retryWrites=true&w=majority';
        mongoose.set('useFindAndModify', false);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(db => console.log("Db connected"));
        //
        ////Set App-Port
        this.app.set('port', process.env.PORT || 3000);
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    start() {
        //
        ////Server start method
        this.app.listen(this.app.get('port'), () => {
            console.log('Server starting');
        })
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/lists', ListRouter)
    }
}
const server = new Server();
server.start();
