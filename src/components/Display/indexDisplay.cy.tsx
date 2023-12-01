import { Provider } from 'react-redux';
import { NoSelection } from './index';
import { mount } from 'cypress/react18';
import { store } from '../../store/store';

describe('<NoSelection />', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <NoSelection />
      </Provider>
    );
  });

  it('Git account loaded', () => {
    cy.get('#gitAccount').should('exist');
  });

  it('Gif loaded', () => {
    cy.get('#pikachuGif').should('exist');
  });
});
