import { Schema, model } from 'mongoose';

const CardSchema = new Schema({
    name: { type:String, required: true },
    trellocardId: { type:Number, required:true },
    trellolistId: { type:Number, required:true }
},{
    versionKey: false
});
export default model('Card', CardSchema);