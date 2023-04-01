import {Entity, model, property} from '@loopback/repository';

@model()
export class Games extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  steamAppID: number;

  @property({
    type: 'string',
    required: true,
  })
  cheapest: string;

  @property({
    type: 'string',
    required: true,
  })
  cheapestDealID: string;

  @property({
    type: 'string',
    required: true,
  })
  external: string;

  @property({
    type: 'string',
    required: true,
  })
  thumb: string;

  @property({
    type: 'object',
  })
  cheapestPriceEver?: {
    price: string;
    date: number;
  };

  @property({
    type: 'array',
    itemType: 'object',
  })
  deals?: {
    storeID: string;
    dealID: string;
    price: string;
    retailPrice: string;
    savings: string;
  }[];


  constructor(data?: Partial<Games>) {
    super(data);
  }
}

export interface GamesRelations {
  // describe navigational properties here
}

export interface IGame {
  gameID: string;
  steamAppID: string;
  cheapest: string;
  cheapestDealID: string;
  external: string;
  thumb: string;
}

export interface IGameDeal {
  info: {
    title: string;
    steamAppID: string;
    thumb: string;
  };
  cheapestPriceEver: {
    price: string;
    date: number;
  };
  deals: {
    storeID: string;
    dealID: string;
    price: string;
    retailPrice: string;
    savings: string;
  }[];
}

export type GamesWithRelations = Games & GamesRelations;
