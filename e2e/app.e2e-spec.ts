import { NgUsermanagerPage } from './app.po';

describe('ng-usermanager App', () => {
  let page: NgUsermanagerPage;

  beforeEach(() => {
    page = new NgUsermanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
