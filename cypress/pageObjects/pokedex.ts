/// <reference types="cypress" />

export class PokedexPageObjects {
  checkTextDisplay(text: string) {
    cy.get('#textDisplay').should('have.text', text);
  }

  clickPokemonButton() {
    cy.get('#POKÉMON').click();
  }

  clickTypesButton() {
    cy.get('#TYPES').should('be.visible');
    cy.get('#TYPES').click();
  }

  clickItemsButton() {
    cy.get('#ITEMS').should('be.visible');
    cy.get('#ITEMS').click();
  }

  clickRegionsButton() {
    cy.get('#REGIONS').should('be.visible');
    cy.get('#REGIONS').click();
  }

  validateWhiteScreen() {
    cy.get('#whiteScreen').should('be.visible');
  }

  validateMusic() {
    cy.get('#music').should('be.visible');
  }

  validateSelectPokemon() {
    cy.get('#selectPokemon').should('have.text', 'SELECT POKÉMON');
  }
  validateSelectItem() {
    cy.get('#selectItem').should('have.text', 'SELECT ITEM');
  }

  validateSelectType() {
    cy.get('#selectType').should('have.text', 'SELECT TYPE');
  }

  validateSelectRegion() {
    cy.get('#selectRegions').should('have.text', 'SELECT REGION');
  }
}

export const pokedexPageObjects = new PokedexPageObjects();
