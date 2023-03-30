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
  response, HttpErrors,
} from '@loopback/rest';
import {Deals} from '../models';
import {DealsRepository} from '../repositories';
import {CheapSharkService} from '../services';
import {inject} from '@loopback/core';

export class DealsController {
  constructor(
    @repository(DealsRepository)
    public dealsRepository: DealsRepository,
    @inject('services.CheapSharkService') protected cheapSharkService: CheapSharkService,
  ) {
  }


  @get('/deals/crawl')
  async crawl(): Promise<string> {

    const deals = await this.cheapSharkService.getAllDeals();
    deals.map(async (deal) => {
      await this.dealsRepository.create(deal);
    });

    try {
      await Promise.all(deals);
    } catch (err) {
      throw new HttpErrors.BadRequest(err);
    }

    return `${deals.length} deals crawled.`;
  }


  @post('/deals')
  @response(200, {
    description: 'Deals model instance',
    content: {'application/json': {schema: getModelSchemaRef(Deals)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deals, {
            title: 'NewDeals',
            exclude: ['dealID'],
          }),
        },
      },
    })
      deals: Omit<Deals, 'dealID'>,
  ): Promise<Deals> {
    return this.dealsRepository.create(deals);
  }

  @get('/deals')
  @response(200, {
    description: 'Array of Deals model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Deals, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Deals) filter?: Filter<Deals>,
  ): Promise<Deals[]> {
    return this.dealsRepository.find(filter);
  }

  @patch('/deals')
  @response(200, {
    description: 'Deals PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deals, {partial: true}),
        },
      },
    })
      deals: Deals,
    @param.where(Deals) where?: Where<Deals>,
  ): Promise<Count> {
    return this.dealsRepository.updateAll(deals, where);
  }
}