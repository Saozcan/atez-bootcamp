"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpCommand = void 0;
const fs = require("fs");
/**
 * It is not working like a global function but like this it is working
 * You can send more than one file to copy
 * to execute it you need to run the command: node dist/index.js cp <path1> <path2>... <copyToPath>
 */
function cpCommand() {
    // const [,,, ...allArgs] = process.argv;
    const allArgs = process.argv.splice(process.argv.indexOf('cp') + 1);
    if (!allArgs || allArgs.length < 2) {
        console.log('Please provide a path');
        return;
    }
    for (let i = 0; i < allArgs.length - 1; i++) {
        const parsedPath = allArgs[i].split('/');
        fs.copyFile(allArgs[i], `${allArgs[allArgs.length - 1]}/${parsedPath[parsedPath.length - 1]}`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('File moved');
            }
        });
    }
}
exports.cpCommand = cpCommand;
//# sourceMappingURL=cpCommand.js.map