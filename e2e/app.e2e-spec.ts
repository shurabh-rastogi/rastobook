import { RastobookPage } from './app.po';

describe('rastobook App', () => {
  let page: RastobookPage;

  beforeEach(() => {
    page = new RastobookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
