

import todoDB from '../db/todoDB';
import {checkDuplicate} from "./utils";

const conf = new(require('conf'));

export function add() {
  let todoItem = conf.get("todo-items");
  if (!todoItem) {
    todoItem = todoDB;
  }
  const [, , , ...argTextFromArgv] = process.argv;
  const argText = argTextFromArgv.join(" ");
  if (!argText || argText === "") {
    console.log("Please enter a todo");
    return;
  }
  if (checkDuplicate(argText)) {
    console.log("Todo item already exists");
    return;
  }
  todoItem.push({
    text: argText,
    isCompleted: false,
    date: new Date(),
  })
  conf.set("todo-items", todoItem);
}
