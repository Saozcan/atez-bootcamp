"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLineCheck = exports.exists = void 0;
const fs = require("fs");
function exists(path) {
    try {
        fs.accessSync(path);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.exists = exists;
function newLineCheck(text) {
    if (text[text.length - 1] !== '\n') {
        text += '\n';
    }
    return text;
}
exports.newLineCheck = newLineCheck;
//# sourceMappingURL=utils.js.map