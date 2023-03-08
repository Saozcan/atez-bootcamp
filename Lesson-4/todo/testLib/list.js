// const conf = require('conf');
// const chalk = require('chalk');

import conf from 'conf';
import chalk from 'chalk';

function list() {
  const todoList = conf.get('todo-items');
  if (todoList && todoList.length > 0) {
    todoList.forEach((todo, index) => {
      if (task.checked) {
        console.log(chalk.green(`${index + 1}. ${todo.text}`));
      }
    })
  } else {
    console.log(chalk.red('TODO olarak hiç bir task yok.'));
  }
}

// module.exports = list;
export default list;