import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent tests', () => {
  it('calculate', () => {
    cy.mount(CalculatorComponent);

    cy.get('.container').within(() => {
      cy.get('#input1').type('7');
      cy.get('#input2').type('27');

      cy.get('#input2').blur();

      cy.get('#total').should('have.text', '34');

      cy.window().focus();

      cy.get('#total').then(($value) => {
        const text = $value.text();

        console.log({ text });

        cy.window().its('navigator.clipboard').invoke('writeText', text);
      });

      cy.window()
        .its('navigator.clipboard')
        .then((clip) => clip.readText())
        .then((text) => {
          console.log({ text });

          cy.get('#total-response').type(text + ' test clipboard:)');
        });
    });
  });
});
