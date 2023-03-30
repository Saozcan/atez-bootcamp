import {Entity, model, property} from '@loopback/repository';


@model()
export class Deals extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  internalName: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    nullable: true,
  })
  metacriticLink?: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  dealID: string;

  @property({
    type: 'string',
    required: true,
  })
  storeID: string;

  @property({
    type: 'string',
    required: true,
  })
  gameID: string;

  @property({
    type: 'string',
    required: true,
  })
  salePrice: string;

  @property({
    type: 'string',
    required: true,
  })
  normalPrice: string;

  @property({
    type: 'string',
    required: true,
  })
  isOnSale: string;

  @property({
    type: 'string',
    required: true,
  })
  savings: string;

  @property({
    type: 'string',
    required: true,
  })
  metacriticScore: string;

  @property({
    type: 'string',
    nullable: true,
  })
  steamRatingText?: string;

  @property({
    type: 'string',
    required: true,
  })
  steamRatingPercent: string;

  @property({
    type: 'string',
    required: true,
  })
  steamRatingCount: string;

  @property({
    type: 'string',
    nullable: true,
  })
  steamAppID?: string;

  @property({
    type: 'number',
    required: true,
  })
  releaseDate: number;

  @property({
    type: 'number',
    required: true,
  })
  lastChange: number;

  @property({
    type: 'string',
    required: true,
  })
  dealRating: string;

  @property({
    type: 'string',
    required: true,
  })
  thumb: string;

  constructor(data?: Partial<Deals>) {
    super(data);
  }

}

export interface IDeals {
  dealID?: string;
  internalName?: string;
  title?: string;
  metacriticLink?: string;
  storeID?: string;
  gameID?: string;
  salePrice?: string;
  normalPrice?: string;
  isOnSale?: string;
  savings?: string;
  metacriticScore?: string;
  steamRatingText?: string;
  steamRatingPercent?: string;
  steamRatingCount?: string;
  steamAppID?: string;
  releaseDate?: number;
  lastChange?: number;
  dealRating?: string;
  thumb?: string;
}

export interface DealsRelations {
  // describe navigational properties here
}

export type DealsWithRelations = Deals & DealsRelations;
