import * as fs from 'fs';

export function lsCommand() {
  fs.readdir('.', (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.table(files);
    }
  });
}
