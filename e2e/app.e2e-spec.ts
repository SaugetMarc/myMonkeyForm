import { MyMonkeySurveyPage } from './app.po';

describe('my-monkey-survey App', () => {
  let page: MyMonkeySurveyPage;

  beforeEach(() => {
    page = new MyMonkeySurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
