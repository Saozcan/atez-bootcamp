#! usr/bin/env node

// const program = require('commander');
import { program } from 'commander';
import {add, complete, deleteTodo, list} from './lib';

program
  .command("add")
  .description("Add todo item")
  .action(() => add());

program
  .command("list")
  .description("List todo items")
  .action(() => list());

program
  .command("complete")
  .description("Complete todo item")
  .action(() => complete());

program
  .command("delete")
  .description("Delete todo item")
  .action(() => deleteTodo());

program.parse();
