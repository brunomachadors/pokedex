import { NoSelection } from './index';
import { mount } from 'cypress/react18';

describe('<NoSelection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<NoSelection />);
  });

  it('Git account loaded', () => {
    mount(<NoSelection />);
    cy.get('#gitAccount').should('exist');
  });

  it('Gif loaded', () => {
    mount(<NoSelection />);
    cy.get('#pikachuGif').should('exist');
  });
});
