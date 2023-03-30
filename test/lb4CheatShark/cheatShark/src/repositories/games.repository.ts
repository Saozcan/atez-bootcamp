import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Games, GamesRelations} from '../models';

export class GamesRepository extends DefaultCrudRepository<
  Games,
  typeof Games.prototype.gameID,
  GamesRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Games, dataSource);
  }
}
