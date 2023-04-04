// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class TestController {
  constructor() {}

  @get('/test')
  async test(): Promise<string> {
    return 'test'
  }
}
