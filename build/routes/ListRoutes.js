"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var List_model_1 = __importDefault(require("../model/List-model"));
var Card_model_1 = __importDefault(require("../model/Card-model"));
var CardRoutes_1 = __importDefault(require("./CardRoutes"));
var ListRouter = /** @class */ (function () {
    function ListRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ListRouter.prototype.getLists = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var lists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, List_model_1.default.find()];
                    case 1:
                        lists = _a.sent();
                        res.json(lists);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListRouter.prototype.getList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, List_model_1.default.findOne({ _id: req.params.id })];
                    case 1:
                        list = _a.sent();
                        res.json(list);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListRouter.prototype.createList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, trellolistId, newList;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, trellolistId = _a.trellolistId;
                        newList = new List_model_1.default({ name: name, trellolistId: trellolistId });
                        return [4 /*yield*/, newList.save()];
                    case 1:
                        _b.sent();
                        console.log(newList);
                        res.json({ List: newList });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListRouter.prototype.updateList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, List_model_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })];
                    case 1:
                        list = _a.sent();
                        res.json(list);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListRouter.prototype.deleteList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, List_model_1.default.findOneAndDelete({ _id: req.params.id })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Card_model_1.default.deleteMany({ listid: req.params.id })];
                    case 2:
                        _a.sent();
                        res.json('List deleted succesfully');
                        return [2 /*return*/];
                }
            });
        });
    };
    ListRouter.prototype.routes = function () {
        this.router.get('/', this.getLists);
        this.router.post('/', this.createList);
        this.router.put('/:id', this.updateList);
        this.router.delete('/:id', this.deleteList);
        this.router.use('/:id', function (req, res, next) {
            console.log("middleware");
            next();
        });
        this.router.get('/:id', this.getList);
        this.router.use('/:id', CardRoutes_1.default);
    };
    return ListRouter;
}());
var listRoutes = new ListRouter();
exports.default = listRoutes.router;
