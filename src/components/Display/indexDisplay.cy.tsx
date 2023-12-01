import { NoSelection } from './index';
import { mount } from 'cypress/react18';

describe('<NoSelection />', () => {
  beforeEach(() => {
    mount(<NoSelection />);
  });

  it('Git account loaded', () => {
    cy.get('#gitAccount').should('exist');
  });

  it('Gif loaded', () => {
    cy.get('#pikachuGif').should('exist');
  });
});
