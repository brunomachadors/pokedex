import { Tresult } from '../../types/pokemon';
import PokemonType from './index';
import { mount } from 'cypress/react18';

import bulbassaur from '../../../cypress/fixtures/bulbassaur.json';

describe('<PokemonType />', () => {
  it('renders', () => {
    const bulbassaurData: Tresult = bulbassaur;
    mount(<PokemonType pokemon={bulbassaurData} />);
  });

  it('It loads the grass type', () => {
    const bulbassaurData: Tresult = bulbassaur;
    mount(<PokemonType pokemon={bulbassaurData} />);
    cy.get('#typeLabel-0').should('be.visible');
  });

  it('It loads the poison type', () => {
    const bulbassaurData: Tresult = bulbassaur;
    mount(<PokemonType pokemon={bulbassaurData} />);
    cy.get('#typeLabel-1').should('be.visible');
  });
});
