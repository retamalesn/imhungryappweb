import { ImhungryappwebPage } from './app.po';

describe('imhungryappweb App', function() {
  let page: ImhungryappwebPage;

  beforeEach(() => {
    page = new ImhungryappwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
