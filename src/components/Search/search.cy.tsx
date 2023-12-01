import { mount } from 'cypress/react18';
import Search from '../Search';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('<Search>', () => {
  it('<Search Container', () => {
    mount(
      <Provider store={store}>
        <Search></Search>
      </Provider>
    );

    cy.get('#detective').should('be.visible');
    cy.get('#searchBox').should('be.visible');
  });
});
