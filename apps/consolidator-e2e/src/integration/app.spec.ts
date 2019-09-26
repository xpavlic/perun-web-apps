import { getGreeting } from '../support/app.po';

describe('consolidator', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to consolidator!');
  });
});
