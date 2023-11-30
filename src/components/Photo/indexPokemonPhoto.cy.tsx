import { mount } from 'cypress/react18';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { ThemeProvider } from 'styled-components';
import themes from '../../utils/themes';
import { Screen, StyledImage } from './styles';

import bulbassaur from '../../../cypress/fixtures/bulbassaur.json';

describe('<PokemonPhoto />', () => {
  it('renders', () => {
    mount(
      <Provider store={store}>
        <ThemeProvider theme={themes}>
          <Screen color={themes.colors.background.grass}>
            <StyledImage
              id={bulbassaur.name}
              key={bulbassaur.id}
              src={bulbassaur.image}
              alt="selectedPokemon"
            />
          </Screen>
        </ThemeProvider>
      </Provider>
    );

    cy.get('#bulbasaur').should('be.visible');
  });
});
