import { mount } from 'cypress/react18';

import ButtonsMenu from '.';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Button container', () => {
  beforeEach('mount button menu', () => {
    mount(
      <Provider store={store}>
        <ButtonsMenu></ButtonsMenu>
      </Provider>
    );
  });
  it('POKEMON BUTTON', () => {
    cy.get('#POKÉMON > .sc-hKgKIp').should('have.text', 'POKÉMON');
  });

  it('TYPES BUTTON', () => {
    cy.get('#TYPES > .sc-hKgKIp').should('have.text', 'TYPES');
  });
  it('ITEMS BUTTON', () => {
    cy.get('#ITEMS > .sc-hKgKIp').should('have.text', 'ITEMS');
  });
  it('Check all buttons', () => {
    cy.get('#REGIONS > .sc-hKgKIp').should('have.text', 'REGIONS');
  });
});
