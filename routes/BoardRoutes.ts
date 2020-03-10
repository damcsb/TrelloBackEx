import { Router, Request, Response } from 'express';


import List from '../model/List-model';
import Card from '../model/Card-model';

class BoardRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    async getAllLists(req:Request, res:Response){
        const Lists = await List.find();
        const Cards = await Card.find();
        res.json({
            Lists,
            Cards
        });
    }

    routes(){
        this.router.get('/', this.getAllLists);
    }

}

const boardRoutes = new BoardRouter();

export default boardRoutes.router;