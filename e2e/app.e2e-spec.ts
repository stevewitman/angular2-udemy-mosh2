import { UdemyMosh2Page } from './app.po';

describe('udemy-mosh2 App', () => {
  let page: UdemyMosh2Page;

  beforeEach(() => {
    page = new UdemyMosh2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
