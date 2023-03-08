"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const todoDB_1 = require("../db/todoDB");
const checkDuplicate_1 = require("./utils/checkDuplicate");
const conf = new (require('conf'));
function add() {
    let todoItem = conf.get("todo-items");
    if (!todoItem) {
        todoItem = todoDB_1.default;
    }
    const [, , , ...argTextFromArgv] = process.argv;
    const argText = argTextFromArgv.join(" ");
    if (!argText || argText === "") {
        console.log("Please enter a todo");
        return;
    }
    if ((0, checkDuplicate_1.default)(argText)) {
        console.log("Todo item already exists");
        return;
    }
    todoItem.push({
        text: argText,
        isCompleted: false,
        date: new Date(),
    });
    conf.set("todo-items", todoItem);
}
exports.add = add;
//# sourceMappingURL=add.js.map