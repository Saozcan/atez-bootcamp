"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf = new (require('conf'));
function checkDuplicate(text) {
    const todoItem = conf.get("todo-items");
    const todoItemText = todoItem.map(todo => todo.text);
    return !!todoItemText.includes(text);
}
exports.default = checkDuplicate;
//# sourceMappingURL=checkDuplicate.js.map