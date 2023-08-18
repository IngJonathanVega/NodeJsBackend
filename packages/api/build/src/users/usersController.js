"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const services_1 = require("@jvega/services");
const common_1 = require("@jvega/common");
const validationSchema_1 = require("../middleware/validationSchema");
const repositories_1 = require("@jvega/repositories");
let UsersController = exports.UsersController = class UsersController extends tsoa_1.Controller {
    constructor() {
        super();
        this.usersService = new services_1.UsersService(new repositories_1.UserRespository());
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.getAll();
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.get(userId);
        });
    }
    createUser(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setStatus(201);
            return yield this.usersService.create(requestBody);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.Get)('{userId}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.Middlewares)((0, validationSchema_1.validateSchema)(common_1.userSchema)),
    (0, tsoa_1.SuccessResponse)('201', 'Created'),
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
exports.UsersController = UsersController = __decorate([
    (0, tsoa_1.Route)('users'),
    __metadata("design:paramtypes", [])
], UsersController);
