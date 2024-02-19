import { PersonComponent } from './person.component';

describe('PersonComponent tests', () => {
  it('calculate age', () => {
    cy.mount(PersonComponent, {
      componentProperties: {
        name: 'João',
        birthday: new Date('2022-03-25'),
      },
    });

    cy.get('.name').get('p').should('contain.text', 'João');

    cy.get('.calculate-button').get('button').should('contain.text', 'click');

    cy.get('.calculate-button').get('button').click();

    cy.get('.age').get('p').should('contain.text', '1');
  });
});
