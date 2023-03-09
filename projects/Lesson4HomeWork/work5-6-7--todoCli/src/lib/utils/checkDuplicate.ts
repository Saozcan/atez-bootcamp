const conf = new (require('conf'));

export function checkDuplicate(text: string): boolean {
  const todoItem = conf.get("todo-items");
  const todoItemText = todoItem.map(todo => todo.text);
  return !!todoItemText.includes(text);
}
