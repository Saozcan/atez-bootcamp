import * as fs from 'fs';
import * as zlib from 'zlib';
import {exists, newLineCheck} from "./utils";


/**
 * Work-1 - Create a function that adds a new text to a file.
 * @param text - text to add
 * @param path - path to file
 */
function addNewTextToFile(text: string, path: string = 'text.txt'){
    if (text === '') { // is text empty ?
        console.log("Please enter a string")
        return ;
    }
    if (!exists(path)) { // is file exist ?
        console.log('File does not exist');
        return ;
    }
    text = newLineCheck(text);  // new line check
    fs.appendFile(path, text, 'utf8', (err) => {
        if (err) console.log(err)
        console.log('The new text has been added!');
    });
}


/**
 * Work-2 - Create a function that copies a text from a file to another file.
 * @param start - start index
 * @param end - end index
 * @param pathInput - path to input file
 * @param pathOutput - path to output file
 * TODO: It will change like a mv command in linux
 */
function copyTextFromFile(start: number, end: number, pathInput: string, pathOutput: string): boolean {
    if (!exists(pathInput)) { // is file exist ?
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
            console.log(err)
            return false
        }
        console.log('The new text has been added!');
        return true;
    })
}

/**
 * Work-3 - Create a function that make a zip file from a folder.
 * We will use the zlip library for this.
 * @param pathInput - path to input folder
 * @param pathOutput - path to output file (zip file)
 */
function zipFolder(pathInput: string, pathOutput: string) {
    if (!exists(pathInput)) { // is file exist ?
        console.log('FipathOutput');
        return false;
    }
    const readStream = fs.createReadStream(pathInput);
    const writeStream = fs.createWriteStream(pathOutput);
    const zip = zlib.createGzip();
    readStream.pipe(zip).pipe(writeStream);
}

/**
 * Read a file and return the content as a string.
 */
export function readFile(path: string): string {
    const data = fs.readFileSync(path, 'utf8');
    if (!data) {
        throw new Error("Could not read file");
    }
    return data;
}

export { addNewTextToFile, copyTextFromFile, zipFolder }
