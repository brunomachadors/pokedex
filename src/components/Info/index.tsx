import {
  ButtonPhoto,
  ButtonInfo,
  InfoButtonContainer,
  BlackScreenInfo,
  Name,
  Id,
  TextContainer,
  Flavour,
} from './styles';
import { selectInfoMenu } from '../../store/info/info';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import themes from '../../utils/themes';
import PokemonType from '../Type';
import { useEffect, useState } from 'react';
import { getSpecie } from '../../api/locations/specie';
import { FlavorTextEntry } from '../../types/specie';

function InfoPainel() {
  const dispatch = useDispatch();

  function handleClickPhoto() {
    dispatch(selectInfoMenu('photo'));
  }

  function handleClickInfo() {
    dispatch(selectInfoMenu('info'));
  }
  return (
    <InfoButtonContainer>
      <ButtonPhoto onClick={handleClickPhoto}>PHOTO</ButtonPhoto>
      <ButtonInfo onClick={handleClickInfo}>INFO</ButtonInfo>
    </InfoButtonContainer>
  );
}

export function Info() {
  const currentPokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon
  );
  const [pokemonFlavour, setPokemonFlavour] = useState<string>();

  const backgroundColor =
    themes.colors.background[
      currentPokemon.types?.[0] as keyof typeof themes.colors.type
    ];

  useEffect(() => {
    const pokemonSpecie = async () => {
      try {
        if (currentPokemon.name !== undefined) {
          const response = await getSpecie(currentPokemon.name);

          const englishTextEntry = response.flavor_text_entries.find(
            (entry: FlavorTextEntry) => entry.language.name === 'en'
          );

          const text = englishTextEntry
            ? englishTextEntry.flavor_text
            : response.flavor_text_entries[0].flavor_text;

          setPokemonFlavour(text.replace(/\n/g, ' '));
        }
      } catch (error) {
        console.error('Error fetching specie data:', error);
      }
    };

    pokemonSpecie();
  }, [currentPokemon.name]);

  return (
    <BlackScreenInfo color={backgroundColor}>
      <TextContainer>
        <Id>#{currentPokemon.id}</Id>
        <Name>{currentPokemon.name.toLocaleUpperCase()}</Name>
        <PokemonType pokemon={currentPokemon}></PokemonType>
        {pokemonFlavour && <Flavour>{pokemonFlavour}</Flavour>}
      </TextContainer>
    </BlackScreenInfo>
  );
}

export default InfoPainel;

export function DisplayInfo() {}