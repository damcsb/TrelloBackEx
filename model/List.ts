import {Schema, model } from 'mongoose';

const ListSchema = new Schema({
    name: {type:String, required:true}
});

export default model('List', ListSchema);