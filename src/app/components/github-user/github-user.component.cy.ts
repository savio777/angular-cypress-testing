import { GithubUserComponent } from './github-user.component';

describe('GithubUserComponent tests', () => {
  it('test request info profile github', () => {
    // select device size screen
    // cy.viewport('iphone-6')

    cy.viewport(550, 1050);

    cy.mount(GithubUserComponent, {
      componentProperties: {
        userName: 'savio777',
      },
    });

    cy.wait(10000);

    cy.get('.avatar').get('img').should('be.visible');
    cy.get('.title').get('h4').should('contain.text', 'Sávio');
    cy.get('.bio').get('p').should('contain.text', 'React');
  });
});
