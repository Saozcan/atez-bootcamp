import {Entity, model, property} from '@loopback/repository';

@model()
export class Games extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  gameID: string;

  @property({
    type: 'string',
    required: true,
  })
  steamAppID: string;

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

  constructor(data?: Partial<Games>) {
    super(data);
  }
}

export interface GamesRelations {
  // describe navigational properties here
}

export type GamesWithRelations = Games & GamesRelations;
