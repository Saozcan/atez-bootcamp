"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complete = void 0;
const conf = new (require('conf'));
function complete() {
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
    todoItem[index - 1].isCompleted = true;
    conf.set("todo-items", todoItem);
}
exports.complete = complete;
//# sourceMappingURL=complete.js.map