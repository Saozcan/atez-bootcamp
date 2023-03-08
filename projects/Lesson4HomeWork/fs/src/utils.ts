import * as fs from 'fs';

function exists(path: string): boolean {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

function newLineCheck(text: string) {
  if (text[text.length - 1] !== '\n') {
    text += '\n';
  }
  return text;
}


export { exists, newLineCheck };