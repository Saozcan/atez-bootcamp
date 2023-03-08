"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipFolder = exports.copyTextFromFile = exports.addNewTextToFile = void 0;
const fs = require("fs");
const zlib = require("zlib");
const utils_1 = require("./utils");
/**
 * Work-1 - Create a function that adds a new text to a file.
 * @param text - text to add
 * @param path - path to file
 */
function addNewTextToFile(text, path = 'text.txt') {
    if (text === '') { // is text empty ?
        console.log("Please enter a string");
        return;
    }
    if (!(0, utils_1.exists)(path)) { // is file exist ?
        console.log('File does not exist');
        return;
    }
    text = (0, utils_1.newLineCheck)(text); // new line check
    fs.appendFile(path, text, 'utf8', (err) => {
        if (err)
            console.log(err);
        console.log('The new text has been added!');
    });
}
exports.addNewTextToFile = addNewTextToFile;
/**
 * Work-2 - Create a function that copies a text from a file to another file.
 * @param start - start index
 * @param end - end index
 * @param pathInput - path to input file
 * @param pathOutput - path to output file
 */
function copyTextFromFile(start, end, pathInput, pathOutput) {
    if (!(0, utils_1.exists)(pathInput)) { // is file exist ?
        console.log('File does not exist');
        return false;
    }
    if (start > end || start < 0 || end < 0) {
        console.log('Please enter a valid range');
        return false;
    }
    const fileData = fs.readFileSync(pathInput, 'utf8');
    if (fileData.length < end || fileData.length < start || fileData.length === 0) {
        console.log('Please enter a valid range');
        return false;
    }
    const returnText = fileData.slice(start, end);
    fs.appendFile(pathOutput, returnText, 'utf8', (err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log('The new text has been added!');
        return true;
    });
}
exports.copyTextFromFile = copyTextFromFile;
/**
 * Work-3 - Create a function that make a zip file from a folder.
 * We will use the zlip library for this.
 * @param pathInput - path to input folder
 * @param pathOutput - path to output file (zip file)
 */
function zipFolder(pathInput, pathOutput) {
    if (!(0, utils_1.exists)(pathInput)) { // is file exist ?
        console.log('FipathOutput');
        return false;
    }
    const readStream = fs.createReadStream(pathInput);
    const writeStream = fs.createWriteStream(pathOutput);
    const zip = zlib.createGzip();
    readStream.pipe(zip).pipe(writeStream);
}
exports.zipFolder = zipFolder;
//# sourceMappingURL=fileHomeWorks.js.map