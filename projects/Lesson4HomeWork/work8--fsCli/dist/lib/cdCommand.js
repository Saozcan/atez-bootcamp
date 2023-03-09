"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cdCommand = void 0;
function cdCommand() {
    const path = process.argv[3];
    if (!path) {
        console.log('Please provide a path');
        return;
    }
    console.log(`Starting directory: ${process.cwd()}`);
    try {
        process.chdir(path);
        console.log(`New directory: ${process.cwd()}`);
    }
    catch (err) {
        console.error(`chdir: ${err}`);
    }
}
exports.cdCommand = cdCommand;
//# sourceMappingURL=cdCommand.js.map