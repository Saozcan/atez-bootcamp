const conf = new(require('conf'));

export function complete() {
  const todoItem = conf.get("todo-items");
  if (!todoItem) {
    console.log("No todo items found");
    return;
  }
  // const index = parseInt(process.argv[3]);
  const index = parseInt(process.argv.slice(process.argv.indexOf("complete") + 1)[0]);
  if (isNaN(index) || index < 1 || index > todoItem.length || !index) {
    console.log("Invalid index");
    return;
  }
  todoItem[index - 1].isCompleted = true;
  conf.set("todo-items", todoItem);
}
