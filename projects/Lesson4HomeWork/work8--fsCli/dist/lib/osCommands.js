"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osCommands = void 0;
const os = require("os");
function osCommands() {
    const osOption = process.argv[3];
    if (!osOption) {
        console.log('Please provide an option');
        return;
    }
    if (osOption === 'username') {
        console.log(os.userInfo().username);
        return;
    }
    else if (osOption === 'hostname') {
        console.log(os.hostname());
        return;
    }
    else if (osOption === 'platform') {
        console.log(os.platform());
        return;
    }
    else if (osOption === 'release') {
        console.log(os.release());
        return;
    }
    else if (osOption === 'totalmem') {
        console.log(os.totalmem());
        return;
    }
    else if (osOption === 'freemem') {
        console.log(os.freemem());
        return;
    }
    else if (osOption === 'cpus') {
        console.log(os.cpus());
        return;
    }
}
exports.osCommands = osCommands;
//# sourceMappingURL=osCommands.js.map