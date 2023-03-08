#! usr/bin/env node

import {program} from 'commander';
import {cdCommand, cpCommand, lsCommand, mvCommand, osCommands, upFolder} from "./lib";

program
  .command("ls")
  .description("List files")
  .action(() => lsCommand());

program
  .command("cd")
  .description("Change directory")
  .action(() => cdCommand());

program
  .command("upFolder")
  .description("Go up one folder")
  .action(() => upFolder());

program
  .command("os")
  .description("Show OS details")
  .action(() => osCommands());

program
  .command("cp")
  .description("Copy file")
  .action(() => cpCommand());

program
  .command("mv")
  .description("Move file")
  .action(() => mvCommand());

program.parse()
