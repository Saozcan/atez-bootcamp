import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {CheapSharkDataSource} from '../datasources';
import { IGame, IGameDeal} from '../models';

export interface CheapSharkRest {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAllGames(title?: string, steamAppID?: string, exact?: number): Promise<IGame[]>;
  getGameById(id: number): Promise<IGameDeal>;
  setAlert(action: string, email: string, gameID: number, price: number): Promise<boolean>;
}

export class CheapSharkRestProvider implements Provider<CheapSharkRest> {
  constructor(
    // cheap_shark must match the name property in the datasource json file
    @inject('datasources.cheap_shark')
    protected dataSource: CheapSharkDataSource = new CheapSharkDataSource(),
  ) {}

  value(): Promise<CheapSharkRest> {
    return getService(this.dataSource);
  }
}
