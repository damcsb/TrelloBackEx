import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');
//
////Cards
var CardSchema = new Schema({
    nameCard:{ type:String },
    trellocardId: { type:Number },
    listid:[{ type: Schema.Types.ObjectId, ref: 'List', required: true }]
},{
    versionKey: false
});

export default model('Card', CardSchema);
module.exports = mongoose.model('Card', CardSchema);
//var Card = mongoose.model('Card', CardSchema);
