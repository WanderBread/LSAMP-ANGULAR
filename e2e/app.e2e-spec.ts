import { LSAMPANGULARPage } from './app.po';

describe('lsamp-angular App', () => {
  let page: LSAMPANGULARPage;

  beforeEach(() => {
    page = new LSAMPANGULARPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
