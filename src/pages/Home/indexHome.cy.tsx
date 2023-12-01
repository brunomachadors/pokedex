import { Provider } from 'react-redux';
import { mount } from 'cypress/react18';
import { store } from '../../store/store';
import { ThemeProvider } from 'styled-components';
import Home from './index';
import themes from '../../utils/themes';

import { pokedexPageObjects } from '../../../cypress/pageObjects/pokedex';

describe('<Home /> WEB', () => {
  beforeEach('Mount Home', () => {
    mount(
      <Provider store={store}>
        <ThemeProvider theme={themes}>
          <Home />
        </ThemeProvider>
      </Provider>
    );
    cy.viewport(1920, 1080);
  });
  it('Text display', () => {
    pokedexPageObjects.checkTextDisplay('POKÉDEX');
  });

  it('Button Container', () => {
    cy.get('#buttonContainer').should('be.visible');
  });

  it('Button POKÉMON', () => {
    pokedexPageObjects.clickPokemonButton();
    pokedexPageObjects.checkTextDisplay('POKÉMON');
    pokedexPageObjects.validateSelectPokemon();
  });

  it('Button TYPES', () => {
    pokedexPageObjects.clickTypesButton();
    pokedexPageObjects.checkTextDisplay('TYPES');
    pokedexPageObjects.validateSelectType();
  });

  it('Button ITEMS', () => {
    pokedexPageObjects.clickItemsButton();
    pokedexPageObjects.checkTextDisplay('ITEMS');
    pokedexPageObjects.validateSelectItem();
  });
  it('Button REGIONS', () => {
    pokedexPageObjects.clickRegionsButton();
    pokedexPageObjects.checkTextDisplay('REGIONS');
    pokedexPageObjects.validateSelectRegion();
  });

  it('White Screen', () => {
    pokedexPageObjects.validateWhiteScreen();
  });

  it(' Music', () => {
    pokedexPageObjects.validateMusic();
  });
});

describe('<Home /> MOBILE', () => {
  beforeEach('Mount Home', () => {
    mount(
      <Provider store={store}>
        <ThemeProvider theme={themes}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    cy.viewport('iphone-x');
  });

  it('Button Container', () => {
    cy.get('#buttonContainer').should('be.visible');
  });

  it('Button POKÉMON', () => {
    pokedexPageObjects.clickPokemonButton();
    pokedexPageObjects.validateSelectPokemon();
  });

  it('Button TYPES', () => {
    pokedexPageObjects.clickTypesButton();
    pokedexPageObjects.validateSelectType();
  });

  it('Button ITEMS', () => {
    pokedexPageObjects.clickItemsButton();
    pokedexPageObjects.validateSelectItem();
  });
  it('Button REGIONS', () => {
    pokedexPageObjects.clickRegionsButton();
    pokedexPageObjects.validateSelectRegion();
  });

  it('White Screen', () => {
    pokedexPageObjects.validateWhiteScreen();
  });
});

describe('<Home /> TABLET', () => {
  beforeEach('Mount Home', () => {
    mount(
      <Provider store={store}>
        <ThemeProvider theme={themes}>
          <Home />
        </ThemeProvider>
      </Provider>
    );
    cy.viewport('ipad-2');
  });

  it('Button Container', () => {
    cy.get('#buttonContainer').should('be.visible');
  });

  it('Button POKÉMON', () => {
    pokedexPageObjects.clickPokemonButton();
    pokedexPageObjects.checkTextDisplay('POKÉMON');
    pokedexPageObjects.validateSelectPokemon();
  });

  it('Button TYPES', () => {
    pokedexPageObjects.clickTypesButton();
    pokedexPageObjects.checkTextDisplay('TYPES');
    pokedexPageObjects.validateSelectType();
  });

  it('Button ITEMS', () => {
    pokedexPageObjects.clickItemsButton();
    pokedexPageObjects.checkTextDisplay('ITEMS');
    pokedexPageObjects.validateSelectItem();
  });
  it('Button REGIONS', () => {
    pokedexPageObjects.clickRegionsButton();
    pokedexPageObjects.checkTextDisplay('REGIONS');
    pokedexPageObjects.validateSelectRegion();
  });

  it('White Screen', () => {
    pokedexPageObjects.validateWhiteScreen();
  });
});
