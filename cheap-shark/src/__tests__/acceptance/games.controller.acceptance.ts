import {Client, createRestAppClient, expect} from '@loopback/testlab';
import {CheapSharkApplication} from '../..';

describe('PingController', () => {
  let app: CheapSharkApplication;
  let client: Client;

  before('setupApplication', async () => {
    app = new CheapSharkApplication();
    await app.boot();
    await app.start();
    client = createRestAppClient(app);
  });

  after(async () => {
    await app.stop();
  });

  it('responds with games when GET /games/3 is called', async () => {
    const res = await client.get('/games/3').expect(200);
    expect(res.body.id).to.equal(3);
  });
});
