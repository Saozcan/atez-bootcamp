import { Client, createRestAppClient, expect } from '@loopback/testlab';
import { CheapSharkApplication} from '../../application';

describe('Test Controller', () => {
  let app: CheapSharkApplication;
  let client: Client;

  before(async () => {
    app = new CheapSharkApplication();
    await app.boot();
    await app.start();
    client = createRestAppClient(app);
  });

  after(async () => {
    await app.stop();
  });

  it('responds with "test" when GET /test is called', async () => {
    const response = await client.get('/test').expect(200);
    expect(response.text).to.eql('test');
  });
});