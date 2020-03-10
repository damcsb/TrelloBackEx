"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
//
////Lists
var ListSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    trellolistId: { type: Number, required: true },
}, {
    versionKey: false
});
module.exports = mongoose.model('list', ListSchema);
exports.default = mongoose_1.model('List', ListSchema);
