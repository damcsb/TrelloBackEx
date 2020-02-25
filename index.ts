import express = require('express');
import https = require('https');
import mongoose = require('mongoose');



class Server {

    public app: express.Express = express();



    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        //
        ////Mongo Connection
        const MONGO_URI = 'mongodb+srv://root:root@trelloex-4nzrj.mongodb.net/test?retryWrites=true&w=majority';
        const MongoClient = require('mongodb').MongoClient;
        const client = new MongoClient(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(()=>{
            console.log("CONNECTED")
        });
        

        //
        ////Set App-Port
        this.app.set('port', process.env.PORT || 3000);
    }

    start() {
        //
        ////Server start method
        this.app.listen(this.app.get('port'), () => {
            console.log('Server starting');
        })
    }
}
const server = new Server();
server.start();
