import {
  FilterExcludingWhere,
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
  response, HttpErrors,
} from '@loopback/rest';
import {Games, IGame} from '../models';
import {GamesRepository} from '../repositories';
import {inject} from '@loopback/core';
import {CheapSharkRest} from '../services';

export class GamesController {
  constructor(
    @repository(GamesRepository)
    public gamesRepository: GamesRepository,
    @inject('services.CheapSharkRest') protected cheapSharkService: CheapSharkRest,
  ) {
  }

  @get('/games/{id}')
  @response(200, {
    description: 'Games model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Games, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Games, {exclude: 'where'}) filter?: FilterExcludingWhere<Games>
  ): Promise<Games> {

    const gameDeal = await this.cheapSharkService.getGameById(id);
    if (gameDeal == null) {
      console.log("Return An Error!!!");
      throw new HttpErrors.BadRequest("Return An Error!!!");
    }

    const game = await this.cheapSharkService.getAllGames(gameDeal?.info.title)
    if (game == null) {
      console.log("Return An Error!!!");
      throw new HttpErrors.BadRequest("Return An Error!!!");
    }

    const returnGame = new Games();

    returnGame.id = parseInt(game[0].gameID);
    returnGame.steamAppID = parseInt(game[0].steamAppID);
    returnGame.cheapest = game[0].cheapest;
    returnGame.cheapestDealID = game[0].cheapestDealID;
    returnGame.external = game[0].external;
    returnGame.thumb = game[0].thumb;
    returnGame.cheapestPriceEver = gameDeal?.cheapestPriceEver;
    returnGame.deals = gameDeal?.deals;

    await this.gamesRepository.create(returnGame);

    return returnGame;
  }

  @get('/games/search')
  @response(200, {
    description: 'Array of CheapShark model instances',
    content: {'application/json': {schema: {type: 'array', items: getModelSchemaRef(Games)}}},
  })
  async search(
    @param.query.string('title', {required: true}) title: string,
  ): Promise<Games[]> {
    const allGamesFromCheap = await this.cheapSharkService.getAllGames(title);
    if (allGamesFromCheap == null) {
      console.log("Return An Error!!!");
      throw new HttpErrors.BadRequest("Return An Error!!!");
    }
    const returnGames: Games[] = []

    allGamesFromCheap.map(async (game: IGame) => {
      const gameDeal = await this.cheapSharkService.getGameById(parseInt(game.gameID));
      if (gameDeal == null) {
        console.log("Return An Error!!!");
        throw new HttpErrors.BadRequest("Return An Error!!!");
      }

      const tmpGame = new Games();

      tmpGame.id = parseInt(game.gameID);
      tmpGame.steamAppID = parseInt(game.steamAppID);
      tmpGame.cheapest = game.cheapest;
      tmpGame.cheapestDealID = game.cheapestDealID;
      tmpGame.external = game.external;
      tmpGame.thumb = game.thumb;
      tmpGame.cheapestPriceEver = gameDeal?.cheapestPriceEver;
      tmpGame.deals = gameDeal?.deals;

    })
    try {
      await Promise.all(returnGames);
    } catch (err) {
      throw new HttpErrors.BadRequest(err);
    }

    return returnGames;
  }

  @get('games/setAlert')
  @response(200, {
    description: 'Set Alert for GameID',
    content: {
      'application/json': {
        schema: {
          type: 'boolean',
        }
      }
    }
  })
  async setAlert(
    @param.query.string('action') action: string,
    @param.query.string('email') email: string,
    @param.query.string('gameID') gameID: number,
    @param.query.string('price') price: number,
  ): Promise<boolean> {
    return this.cheapSharkService.setAlert(action, email, gameID, price);
  }
}