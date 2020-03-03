"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express = require("express");
var mongoose = require("mongoose");
var indexRoutes_1 = __importDefault(require("../routes/indexRoutes"));
var ListRoutes_1 = __importDefault(require("../routes/ListRoutes"));
var CardRoutes_1 = __importDefault(require("../routes/CardRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.app = express();
        this.config();
        this.routes();
        this.router = express_1.Router();
    }
    Server.prototype.config = function () {
        //
        ////Mongo config
        var MONGO_URI = 'mongodb+srv://root:root@trelloex-4nzrj.mongodb.net/test?retryWrites=true&w=majority';
        mongoose.set('useFindAndModify', false);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(function (db) { return console.log("Db connected"); });
        //
        ////Set App-Port
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };
    Server.prototype.listIdCorrect = function (req, res, next) {
        if (req.params.id) {
            next();
        }
        else {
            this.router.get('/', function (req, res) { return res.send('invalid ID-List'); });
        }
    };
    Server.prototype.start = function () {
        //
        ////Server start method
        this.app.listen(this.app.get('port'), function () {
            console.log('Server starting');
        });
    };
    Server.prototype.routes = function () {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/lists', ListRoutes_1.default);
        this.app.use('/api/cards', CardRoutes_1.default);
    };
    return Server;
}());
var server = new Server();
server.start();
