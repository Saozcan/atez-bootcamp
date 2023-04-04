import {
  Filter,
  FilterExcludingWhere,
  repository,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  requestBody,
  response, HttpErrors,
} from '@loopback/rest';
import {Games, IGame, IGameDeal} from '../models';
import {GamesRepository} from '../repositories';
import {CheapSharkRest} from '../services';
import {inject} from '@loopback/core';

export class GamesController {
  constructor(
    @repository(GamesRepository)
    public gamesRepository : GamesRepository,
    @inject('services.CheapSharkRest') protected cheapSharkRest: CheapSharkRest,
  ) {}

  @post('/games')
  @response(200, {
    description: 'Games model instance',
    content: {'application/json': {schema: getModelSchemaRef(Games)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Games, {
            title: 'NewGames',
            exclude: ['id'],
          }),
        },
      },
    })
    games: Omit<Games, 'id'>,
  ): Promise<Games> {
    return this.gamesRepository.create(games);
  }

  @get('/games')
  @response(200, {
    description: 'Array of Games model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Games, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Games) filter?: Filter<Games>,
  ): Promise<Games[]> {
    console.log('filter: ', filter);
    return this.gamesRepository.find(filter);
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
    return this.gamesRepository.findById(id, filter);
  }

  @get('/games/search')
  @response(200, {
    description: 'Search by title and create',
    content: {
      'application/json': {
        schema: { type: 'array', items: getModelSchemaRef(Games, {includeRelations: true})},
      }
    }
  })
  async searchByTitle(
    @param.query.string('title') title: string,
  ): Promise<Games[]> {
    // const games: IGame[] = await this.cheapSharkRest.getGamesByTitle(title);
    const games: IGame[] = await this.cheapSharkRest.getGamesByTitle('/games', title);
    const returnGames: Games[] = [];

    if (games.length === 0) return [];

    try {
      await Promise.all(
        games.map(async (game: IGame) => {
          const deal: IGameDeal = await this.cheapSharkRest.getGameById(parseInt(game.gameID));
          const newGame: Games = await this.createGame({game: game, deal: deal});
          returnGames.push(newGame);
        })
      )
    } catch (err) {
      console.log('error: ', err);
      throw new HttpErrors.BadRequest('Error creating games');
    }
    try {
      await Promise.all(
        returnGames.map(async (game: Games) => {
          if (!(await this.gamesRepository.exists(game.gameID)))
            await this.gamesRepository.create(game);
          else
            await this.gamesRepository.update(game);
        })
      )
    } catch (err) {
      console.log('errorCreate: ', err);
      throw new HttpErrors.BadRequest('Error creating games');
    }
    return returnGames;
  }

  @get('/games/setAlert')
  async setAlert(
    @param.query.string('action') action: string,
    @param.query.string('email') email: string,
    @param.query.number('gameID') gameID: number,
    @param.query.number('price') price: number,
  ): Promise<boolean> {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    if (!emailRegex.test(email)) throw new HttpErrors.BadRequest('Invalid email');
    return this.cheapSharkRest.setAlert('alerts', action, email, gameID, price);
  }

  public async createGame({game, deal}: {game?: IGame; deal: IGameDeal;}): Promise<Games> {
    const newGame: Games = new Games();
    if (game !== undefined) {
      newGame.gameID = parseInt(game.gameID);
      newGame.steamAppID = game.steamAppID;
      newGame.cheapest = game.cheapest;
      newGame.cheapestDealID = game.cheapestDealID;
      newGame.external = game.external;
      newGame.thumb = game.thumb;
    }
    newGame.cheapestPriceEver = deal.cheapestPriceEver;
    newGame.deals = deal.deals;
    return newGame;
  }

  public async updateAllGames() {
    // const games: Games = await this.gamesRepository.findById(2);
    // console.log('games: ', games);
    // try {
    // await Promise.all(
    //   games.map(async (game: Games) => {
    //     const deal: IGameDeal = await this.cheapSharkRest.getGameById(game.gameID);
    //     const newGame: Games = await this.createGame({deal: deal});
    //     await this.gamesRepository.update(newGame);
    //   }
    // )) } catch (err) {
    //   console.log('error: ', err);
    //   throw new HttpErrors.BadRequest('Error updating games');
    // }
  }
}
