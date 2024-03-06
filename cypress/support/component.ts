import './commands';
import '@github/clipboard-copy-element';
import 'cypress-if';

import { mount } from 'cypress/angular';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(MyComponent)
