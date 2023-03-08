"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lsCommand = void 0;
const fs = require("fs");
function lsCommand() {
    fs.readdir('.', (err, files) => {
        if (err) {
            console.log(err);
        }
        else {
            console.table(files);
        }
    });
}
exports.lsCommand = lsCommand;
//# sourceMappingURL=lsCommand.js.map