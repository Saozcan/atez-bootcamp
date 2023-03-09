"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upFolder = void 0;
function upFolder() {
    try {
        console.log(`Starting directory: ${process.cwd()}`);
        process.chdir('..');
        console.log(`New directory: ${process.cwd()}`);
    }
    catch (err) {
        console.error(`chdir: ${err}`);
    }
}
exports.upFolder = upFolder;
//# sourceMappingURL=upFolder.js.map