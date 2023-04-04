// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {CheapSharkRest} from '../services';
import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

export class DealsController {
  constructor(
    @inject('services.CheapSharkRest') protected cheapSharkRest: CheapSharkRest
  ) {}

  @get('/deals')
  async getAllDeals(): Promise<never> {
    return this.cheapSharkRest.getAllDeals('deals', 1);
  }

  @get('/deals/test')
  async test(): Promise<string> {
    return 'test'
  }
}
