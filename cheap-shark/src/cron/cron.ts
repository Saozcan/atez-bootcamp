import { CronJob } from 'cron';
import {GamesController} from '../controllers';

export const job = new CronJob('*/5 * * * * *', () => {
  GamesController.prototype.updateAllGames();
});

