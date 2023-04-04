import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DbDataSource} from '../datasources';
import {IGame, IGameDeal} from '../models';

export interface CheapSharkRest {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAllDeals(path: string, storeID: number): Promise<never>;
  getGamesByTitle(b: string, title: string): Promise<IGame[]>;
  getGameById(id: number): Promise<IGameDeal>;
  searchGames(p: string, t: string) : Promise<IGame[]>;
  setAlert(p: string, a: string, e: string, gi: number, pr: number) : Promise<boolean>;
}

export class CheapSharkRestProvider implements Provider<CheapSharkRest> {
  constructor(
    // db must match the name property in the datasource json file
    @inject('datasources.db')
    protected dataSource: DbDataSource = new DbDataSource(),
  ) {}

  value(): Promise<CheapSharkRest> {
    return getService(this.dataSource);
  }
}
