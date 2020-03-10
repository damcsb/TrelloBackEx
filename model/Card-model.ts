import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');
//
////Cards
var CardSchema = new Schema({
    name:{ type:String, required: true},
    trellocardId: { type:Number },
    listid:{ type: Schema.Types.ObjectId, ref:'list' }
},{
    versionKey: false
});

module.exports = mongoose.model('card', CardSchema);
export default model('Card', CardSchema);

