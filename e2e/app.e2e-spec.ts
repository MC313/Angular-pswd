import { PswdGeneratorPage } from './app.po';

describe('pswd-generator App', () => {
  let page: PswdGeneratorPage;

  beforeEach(() => {
    page = new PswdGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
