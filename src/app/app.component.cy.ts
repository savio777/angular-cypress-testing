import { AppComponent } from './app.component';

describe('app first test', () => {
  it('can mount', () => {
    cy.mount(AppComponent);
  });

  it('text in title page', () => {
    cy.mount(AppComponent);
    cy.get('h1').should('contain.text', 'Hello, angular-cypress-testing');
  });

  it('button action', () => {
    cy.mount(AppComponent);

    cy.get('#buttonTest').get('button').should('contain.text', 'click test');

    cy.get('#buttonTest').get('button').first().click();

    cy.get('#buttonTestDisabled')
      .get('button')
      .should('have.class', 'disabled');
  });
});
