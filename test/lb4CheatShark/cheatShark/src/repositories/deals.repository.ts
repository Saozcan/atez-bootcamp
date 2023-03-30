import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Deals, DealsRelations} from '../models';

export class DealsRepository extends DefaultCrudRepository<
  Deals,
  typeof Deals.prototype.dealID,
  DealsRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Deals, dataSource);
  }
}
