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
        this.app.set('port', process.env.PORT || 3000);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'), function () {
            console.log('Server starting');
        });
    };
    return Server;
}());
var server = new Server();
server.start();
