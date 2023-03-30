import {Entity, model, property} from '@loopback/repository';

@model()
export class Table extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  bla: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  blabla: string;


  constructor(data?: Partial<Table>) {
    super(data);
  }
}

export interface TableRelations {
  // describe navigational properties here
}

export type TableWithRelations = Table & TableRelations;
