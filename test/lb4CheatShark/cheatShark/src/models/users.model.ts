import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'name',
      dataType: 'VARCHAR',
      dataLength: 255,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'email',
      dataType: 'VARCHAR',
      dataLength: 255,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  email: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
