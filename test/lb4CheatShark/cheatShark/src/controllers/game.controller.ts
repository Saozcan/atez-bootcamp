import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  requestBody,
  response,
} from '@loopback/rest';
import {Games} from '../models';
import {GamesRepository} from '../repositories';
import {inject} from '@loopback/core';
import {CheapSharkService} from '../services';


export class GameController {
  constructor(
    @repository(GamesRepository)
    public gamesRepository : GamesRepository,

    @inject('services.CheapSharkService') protected cheapSharkService: CheapSharkService,
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
            exclude: ['gameID'],
          }),
        },
      },
    })
    games: Omit<Games, 'gameID'>,
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
    return this.gamesRepository.find(filter);
  }

  @get('/games/search')
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
  async search(
  @param.query.string('title') title: string,
  ): Promise<Games[]> {
    return this.cheapSharkService.getGameByTitle(title);
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


  @patch('/games')
  @response(200, {
    description: 'Games PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Games, {partial: true}),
        },
      },
    })
    games: Games,
    @param.where(Games) where?: Where<Games>,
  ): Promise<Count> {
    return this.gamesRepository.updateAll(games, where);
  }

}
