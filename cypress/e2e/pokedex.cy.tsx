describe('Select Pokémons in Pokédex', () => {
  beforeEach(() => {
    cy.visit('https://brunomachadors.github.io/pokedex/');
  });

  const pokemons = ['charmander', 'psyduck', 'vulpix', 'voltorb'];

  pokemons.forEach((pokemon) => {
    it(`Search ${pokemon}`, () => {
      cy.get('#POKÉMON').click();
      cy.get(`[data-cy=${pokemon}]`).click();
      cy.get('#textDisplay').should('contain.text', pokemon.toUpperCase());
    });
  });
});

describe('Type Pokemon at the search ', () => {
  beforeEach(() => {
    cy.visit('https://brunomachadors.github.io/pokedex/');
  });

  it.skip('Search Pokemon', () => {
    cy.get('#POKÉMON').click();
    cy.get('#searchBox').should('be.visible');
    cy.wait(4000);
    cy.get('#searchBox').type('Gengar');
    cy.get('[data-cy="gengar"]').click();
    cy.get('#textDisplay').should('have.text', 'GENGAR');
  });
});
