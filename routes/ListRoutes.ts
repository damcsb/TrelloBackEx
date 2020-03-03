import { Router, Request, Response } from 'express';

import List from '../model/List-model';

class ListRouter {
    router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }
    async getLists(req:Request, res:Response){
        const lists = await List.find();
        res.json(lists);
    }

    async getList(req:Request, res:Response){
        const list = await List.findOne({ _id: req.params.id })
        res.json(list);
    }

    async createList(req: Request, res: Response) {
        const {name, trellolistId}  = req.body;
        const newList = new List({name, trellolistId});
        await newList.save();
        console.log(newList);
        res.json({ List: newList });
    }


    async updateList(req: Request, res: Response) {
        const list = await List.findOneAndUpdate({_id:req.params.id}, req.body, { new: true });
        res.json(list);
    }

    async deleteList(req: Request, res: Response) {
        await List.findOneAndDelete({ _id: req.params.id })
        res.json('List deleted succesfully')
    }

    routes(){
        this.router.get('/', this.getLists);
        this.router.get('/:id', this.getList);
        this.router.post('/', this.createList);
        this.router.put('/:id', this.updateList);
        this.router.delete('/:id', this.deleteList);
    }

}
const listRoutes = new ListRouter();

export default listRoutes.router;