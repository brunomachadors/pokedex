import { mount } from 'cypress/react18';
import InfoPainel from '.';

import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('<InfoPainel/>', () => {
  beforeEach('Loads Info Painel', () => {
    mount(
      <Provider store={store}>
        <InfoPainel></InfoPainel>;
      </Provider>
    );
  });

  it('Validate Info Button Info', () => {
    cy.get('[data-cy="ButtonInfo"]').should('be.visible');
    cy.get('[data-cy="ButtonInfo"]').click();
    cy.get('[data-cy="ButtonInfo"]').should('have.text', 'INFO');
  });

  it('Validate Info Button Photo', () => {
    cy.get('[data-cy="ButtonPhoto"]').should('be.visible').click();
    cy.get('[data-cy="ButtonPhoto"]').should('have.text', 'PHOTO');
  });
});
