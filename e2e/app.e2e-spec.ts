import { browser } from 'protractor';
import { AppPage } from './app.po';
import { TODOItem } from '../src/app/shared/models/todo-item';

describe('todoapp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', (done) => {
    page.navigateTo();
    browser.waitForAngular().then(() => {
      expect(page.getAmountOfTODOs()).toBe(2);
      done();
    });
  });
});
