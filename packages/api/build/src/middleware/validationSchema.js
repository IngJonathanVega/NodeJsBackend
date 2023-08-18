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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const zod_1 = require("zod");
function getSchemaErrors(schema, data) {
    try {
        schema.parse(data);
        return [];
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return error.errors.map(err => {
                if (err.path.length === 0) {
                    return {
                        field: `${err.path.toString()}`,
                        error: 'required',
                    };
                }
                return {
                    field: `${err.path.toString()}`,
                    error: `${err.message.toString()}`,
                };
            });
        }
        else {
            throw error;
        }
    }
}
function validateSchema(schema) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const schemaErrors = getSchemaErrors(schema, req.body);
        if (schemaErrors.length === 0) {
            next();
        }
        else {
            res.status(400).json({ errors: schemaErrors });
        }
    });
}
exports.validateSchema = validateSchema;
