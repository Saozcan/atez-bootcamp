import {Entity, model, property} from '@loopback/repository';

@model()
export class CheapShark extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  dealID?: string;

  @property({
    type: 'string',
  })
  internalName?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
    nullable: true,
  })
  metacriticLink?: string;

  @property({
    type: 'string',
  })
  storeID?: string;

  @property({
    type: 'string',
  })
  gameID?: string;

  @property({
    type: 'string',
  })
  salePrice?: string;

  @property({
    type: 'string',
  })
  normalPrice?: string;

  @property({
    type: 'string',
  })
  isOnSale?: string;

  @property({
    type: 'string',
  })
  savings?: string;

  @property({
    type: 'string',
  })
  metacriticScore?: string;

  @property({
    type: 'string',
    nullable: true,
  })
  steamRatingText?: string;

  @property({
    type: 'string',
  })
  steamRatingPercent?: string;

  @property({
    type: 'string',
  })
  steamRatingCount?: string;

  @property({
    type: 'string',
    nullable: true,
  })
  steamAppID?: string;

  @property({
    type: 'number',
  })
  releaseDate?: number;

  @property({
    type: 'number',
  })
  lastChange?: number;

  @property({
    type: 'string',
  })
  dealRating?: string;

  @property({
    type: 'string',
  })
  thumb?: string;


  constructor(data?: Partial<CheapShark>) {
    super(data);
  }
}

export interface CheapSharkRelations {
  // describe navigational properties here
}

export type CheapSharkWithRelations = CheapShark & CheapSharkRelations;
