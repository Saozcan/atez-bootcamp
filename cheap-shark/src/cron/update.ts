

export function updateGames() {
  const cron = require('node-cron');

  cron.schedule('* 23 * * *', () => {
    console.log('Running a task every day at 23:00');
  })
}
