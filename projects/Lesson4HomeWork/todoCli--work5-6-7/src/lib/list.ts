import todoDB from '../db/todoDB';

const conf = new(require('conf'));

export function list() {
  let todoItem = conf.get("todo-items");
  console.log("Index\t Completed\t Todos");
  console.log("-----\t ---------\t -----");
  if (!todoItem) {
    return ;
  }
  todoItem.forEach((todo, index) => {
    console.log(`${index + 1}.\t ${todo.isCompleted ? 'Yes' : 'No'}\t\t ${todo.text}`);
  });
}
