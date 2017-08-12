import { AppobookFrontendPage } from './app.po';

describe('appobook-frontend App', () => {
  let page: AppobookFrontendPage;

  beforeEach(() => {
    page = new AppobookFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
