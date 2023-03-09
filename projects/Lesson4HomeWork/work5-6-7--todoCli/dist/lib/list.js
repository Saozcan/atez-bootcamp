"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const conf = new (require('conf'));
function list() {
    let todoItem = conf.get("todo-items");
    console.log("Index\t Completed\t Todos");
    console.log("-----\t ---------\t -----");
    if (!todoItem) {
        return;
    }
    todoItem.forEach((todo, index) => {
        console.log(`${index + 1}.\t ${todo.isCompleted ? 'Yes' : 'No'}\t\t ${todo.text}`);
    });
}
exports.list = list;
//# sourceMappingURL=list.js.map