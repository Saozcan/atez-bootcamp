import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {CheapSharkDataSource} from '../datasources';
import {Deals, Games, StoreCrawl} from '../models';

export interface CheapSharkService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAllStores(): Promise<StoreCrawl[]>;
  getAllDeals(): Promise<Deals[]>;
  getGameByTitle(title: string): Promise<Games[]>;
  setAlert(action:string, email: string, gameID: number, price: number): Promise<boolean>;
}

export class CheapSharkServiceProvider implements Provider<CheapSharkService> {
  constructor(
    // CheapShark must match the name property in the datasource json file
    @inject('datasources.CheapShark')
    protected dataSource: CheapSharkDataSource = new CheapSharkDataSource(),
  ) {}

  value(): Promise<CheapSharkService> {
    return getService(this.dataSource);
  }
}
