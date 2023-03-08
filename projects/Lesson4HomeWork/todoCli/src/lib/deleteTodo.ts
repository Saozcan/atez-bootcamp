const conf = new(require('conf'));

export function deleteTodo() {
  const todoItem = conf.get("todo-items");
  if (!todoItem) {
    console.log("No todo items found");
    return;
  }
  const index = parseInt(process.argv[3]);
  if (isNaN(index) || index < 1 || index > todoItem.length || !index) {
    console.log("Invalid index");
    return;
  }
  todoItem.splice(index - 1, 1);
  conf.set("todo-items", todoItem);
}