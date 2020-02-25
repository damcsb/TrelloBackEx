"use strict";
exports.__esModule = true;
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.app = express();
        this.config();
    }
    Server.prototype.config = function () {
        //
        ////Mongo Connection
        var MONGO_URI = 'mongodb+srv://root:root@trelloex-4nzrj.mongodb.net/test?retryWrites=true&w=majority';
        var MongoClient = require('mongodb').MongoClient;
        var client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(function () {
            console.log("CONNECTED");
        });
        //
        ////Set App-Port
        this.app.set('port', process.env.PORT || 3000);
    };
    Server.prototype.start = function () {
        //
        ////Server start method
        this.app.listen(this.app.get('port'), function () {
            console.log('Server starting');
        });
    };
    return Server;
}());
var server = new Server();
server.start();
