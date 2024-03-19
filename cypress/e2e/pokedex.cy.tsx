describe('Select Pokémons in Pokédex', () => {
  beforeEach(() => {
    cy.visit('https://brunomachadors.github.io/pokedex/');
  });

  const pokemons = ['charmander', 'psyduck'];

  pokemons.forEach((pokemon) => {
    it(`Search ${pokemon}`, () => {
      cy.get('#POKÉMON').click();
      cy.get(`[data-cy=${pokemon}]`).click();
      cy.get('#textDisplay').should('contain.text', pokemon.toUpperCase());
    });
  });
});

describe('Type Pokemon at the search ', () => {});
