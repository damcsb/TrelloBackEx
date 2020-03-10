import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');

//
////Lists
const ListSchema = new Schema({
    name: { type:String, required: true },
    trellolistId:{type:Number, required:true},
},{
    versionKey: false
});

module.exports = mongoose.model('list', ListSchema);
export default model('List', ListSchema);
