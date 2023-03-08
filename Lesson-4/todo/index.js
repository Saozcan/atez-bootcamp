#! /usr/bin/env node

/**
 * ADD, TASK-CHECK, UPDATE, LIST
 */

// const { program } = require("commander"); // program -> komut satırı arayüzü
// const { addTask, listTasks, updateTask, checkTask } = require("./todo");
import { program } from "commander";
// import { addTask, listTasks, updateTask, checkTask } from "./todo";
import list from "./testLib/list";

program
  .command("list")
  .description("Add todo item")
  .action(list);

program.parse();

/**
 * task check command
 * update command
 * listeleri gruplama ve bulma
 *
 * ekstra olarak;
 * silme, güncelleme, listeleme, arama, filtreleme ... gibiler yapılabilir.
 *
 * dbeaver gibi bir araç kullanılabilir.
 * postgresql kullanılacak.
 */

