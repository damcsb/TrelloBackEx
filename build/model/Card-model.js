"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
//
////Cards
var CardSchema = new mongoose_1.Schema({
    nameCard: { type: String },
    trellocardId: { type: Number },
    listid: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'List', required: true }]
}, {
    versionKey: false
});
exports.default = mongoose_1.model('Card', CardSchema);
module.exports = mongoose.model('Card', CardSchema);
//var Card = mongoose.model('Card', CardSchema);
