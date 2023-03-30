import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {CheapShark, CheapSharkRelations} from '../models';

export class CheapSharkRepository extends DefaultCrudRepository<
  CheapShark,
  typeof CheapShark.prototype.dealID,
  CheapSharkRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(CheapShark, dataSource);
  }
}
