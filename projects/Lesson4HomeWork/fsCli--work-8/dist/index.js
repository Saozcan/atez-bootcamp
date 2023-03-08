#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const lib_1 = require("./lib");
commander_1.program
    .command("ls")
    .description("List files")
    .action(() => (0, lib_1.lsCommand)());
commander_1.program
    .command("cd")
    .description("Change directory")
    .action(() => (0, lib_1.cdCommand)());
commander_1.program
    .command("upFolder")
    .description("Go up one folder")
    .action(() => (0, lib_1.upFolder)());
commander_1.program
    .command("os")
    .description("Show OS details")
    .action(() => (0, lib_1.osCommands)());
commander_1.program
    .command("cp")
    .description("Copy file")
    .action(() => (0, lib_1.cpCommand)());
commander_1.program
    .command("mv")
    .description("Move file")
    .action(() => (0, lib_1.mvCommand)());
commander_1.program.parse();
//# sourceMappingURL=index.js.map