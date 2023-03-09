
export function upFolder() {
  try {
    console.log(`Starting directory: ${process.cwd()}`);
    process.chdir('..');
    console.log(`New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
}