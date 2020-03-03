import { Schema, model } from 'mongoose';

const ListSchema = new Schema({
    name: { type:String, required: true },
    trellolistId:{type:Number, required:true},

},{
    versionKey: false
});


export default model('List', ListSchema);