import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CheapShark} from '../models';
import {CheapSharkRepository} from '../repositories';

export class CheapSharkController {
  constructor(
    @repository(CheapSharkRepository)
    public cheapSharkRepository : CheapSharkRepository,
  ) {}

  @get('/cheap-sharks/search')
  @response(200, {
    description: 'Array of CheapShark model instances',
    content: {'application/json': {schema: {type: 'array', items: getModelSchemaRef(CheapShark)}}},
  })
  async search(
    @param.query.string('title', {required: true}) title: string,
  ): Promise<CheapShark[]> {
    return this.cheapSharkRepository.find({
      where: {
        title: {
          like: `%${title}%`,
        },
      },
    });
  }

  // @get('/cheap-sharks/search')
  // @response(200, {
  //   description: 'Array of CheapShark model instances',
  //   content: {'application/json': {schema: {type: 'array', items: getModelSchemaRef(CheapShark)}}},
  // })
  // async search(
  //   @param.query.string('q', {required: true}) title: string,
  // ): Promise<CheapShark[]> {
  //   return this.cheapSharkRepository.find({
  //     where: {
  //       title: {
  //         like: `%${title}%`,
  //       },
  //     },
  //   });
  // }

  @post('/cheap-sharks/bulk')
  @response(200, {
    description: 'Array of CheapShark model instances',
    content: {'application/json': {schema: {type: 'array', items: getModelSchemaRef(CheapShark)}}},
  })
  async createAll(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: getModelSchemaRef(CheapShark, {
              title: 'NewCheapSharks',
            }),
          },
        },
      },
    })
      cheapSharks: CheapShark[],
  ): Promise<CheapShark[]> {
    return this.cheapSharkRepository.createAll(cheapSharks);
  }

  @post('/cheap-sharks')
  @response(200, {
    description: 'CheapShark model instance',
    content: {'application/json': {schema: getModelSchemaRef(CheapShark)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CheapShark, {
            title: 'NewCheapShark',
          }),
        },
      },
    })
    cheapShark: CheapShark
  ): Promise<CheapShark> {
    return this.cheapSharkRepository.create(cheapShark);
  }

  @get('/cheap-sharks/count')
  @response(200, {
    description: 'CheapShark model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CheapShark) where?: Where<CheapShark>,
  ): Promise<Count> {
    return this.cheapSharkRepository.count(where);
  }

  @get('/cheap-sharks')
  @response(200, {
    description: 'Array of CheapShark model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CheapShark, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CheapShark) filter?: Filter<CheapShark>,
  ): Promise<CheapShark[]> {
    return this.cheapSharkRepository.find(filter);
  }

  @patch('/cheap-sharks')
  @response(200, {
    description: 'CheapShark PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CheapShark, {partial: true}),
        },
      },
    })
    cheapShark: CheapShark,
    @param.where(CheapShark) where?: Where<CheapShark>,
  ): Promise<Count> {
    return this.cheapSharkRepository.updateAll(cheapShark, where);
  }

  @get('/cheap-sharks/{id}')
  @response(200, {
    description: 'CheapShark model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CheapShark, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CheapShark, {exclude: 'where'}) filter?: FilterExcludingWhere<CheapShark>
  ): Promise<CheapShark> {
    return this.cheapSharkRepository.findById(id, filter);
  }

  @patch('/cheap-sharks/{id}')
  @response(204, {
    description: 'CheapShark PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CheapShark, {partial: true}),
        },
      },
    })
    cheapShark: CheapShark,
  ): Promise<void> {
    await this.cheapSharkRepository.updateById(id, cheapShark);
  }

  @put('/cheap-sharks/{id}')
  @response(204, {
    description: 'CheapShark PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cheapShark: CheapShark,
  ): Promise<void> {
    await this.cheapSharkRepository.replaceById(id, cheapShark);
  }

  @del('/cheap-sharks/{id}')
  @response(204, {
    description: 'CheapShark DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cheapSharkRepository.deleteById(id);
  }
}
