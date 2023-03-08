#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const program = require('commander');
const commander_1 = require("commander");
const lib_1 = require("./lib");
commander_1.program
    .command("add")
    .description("Add todo item")
    .action(() => (0, lib_1.add)());
commander_1.program
    .command("list")
    .description("List todo items")
    .action(() => (0, lib_1.list)());
commander_1.program
    .command("complete")
    .description("Complete todo item")
    .action(() => (0, lib_1.complete)());
commander_1.program
    .command("delete")
    .description("Delete todo item")
    .action(() => (0, lib_1.deleteTodo)());
commander_1.program.parse();
//# sourceMappingURL=index.js.map