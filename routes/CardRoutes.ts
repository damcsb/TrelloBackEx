import { Router, Request, Response } from 'express';
import { ObjectId } from 'bson'

import Card from '../model/Card-model';

class CardRouter {

    router: Router;
    

    constructor(){
        this.router = Router();
        this.routes();
    }

    async getCards(req:Request, res:Response){
        const cards = await Card.find();
        res.json(cards);
    }

    async getCard(req:Request, res:Response){
        const card = await Card.findOne({ _id: req.params.id })
        res.json(card);
    }

    async createCard(req: Request, res: Response) {

        let listid = new ObjectId(req.body.listid);

        const {name, trellocardId} = req.body;
        const newCard = new Card({name, trellocardId, listid});
        await newCard.save();
        console.log(newCard);
        res.json({ Card: newCard });
    }

    async updateCard(req: Request, res: Response) {
        const card = await Card.findOneAndUpdate({_id:req.params.id}, req.body, { new: true });
        res.json(card);
    }

    async deleteCard(req: Request, res: Response) {
        await Card.findOneAndDelete({ _id: req.params.id })
        res.json('Card deleted succesfully')
    }

    routes(){

        this.router.get('/cards', this.getCards);
        this.router.get('/cards/:id', this.getCard);
        this.router.post('/cards', this.createCard);
        this.router.put('/cards/:id', this.updateCard);
        this.router.delete('/cards/:id', this.deleteCard);

    }

}

const cardRoutes = new CardRouter();

export default cardRoutes.router;
