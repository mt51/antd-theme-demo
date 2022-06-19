"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __importDefault(require("./components"));
const colors_1 = __importDefault(require("./colors"));
const theme_1 = __importDefault(require("./theme"));
const patches_1 = __importDefault(require("./patches"));
exports.default = {
    ...components_1.default,
    ...colors_1.default,
    ...theme_1.default,
    ...patches_1.default,
};
//# sourceMappingURL=index.js.map