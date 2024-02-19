import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent tests', () => {
  it('calculate', () => {
    cy.mount(CalculatorComponent);

    cy.get('.container').within(() => {
      cy.get('#input1').type('7');
      cy.get('#input2').type('27');

      cy.get('#input2').blur();

      cy.get('#total').should('have.text', '34');
    });
  });
});
