import express = require('express');

import https = require('https');


class Server {

    public app: express.Express = express();

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server starting');
        })
    }

}
const server = new Server();
server.start();
