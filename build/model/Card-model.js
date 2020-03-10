"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
//
////Cards
var CardSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    trellocardId: { type: Number },
    listid: { type: mongoose_1.Schema.Types.ObjectId, ref: 'list' }
}, {
    versionKey: false
});
module.exports = mongoose.model('card', CardSchema);
exports.default = mongoose_1.model('Card', CardSchema);
