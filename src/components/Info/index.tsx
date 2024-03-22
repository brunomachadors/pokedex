import {
  ButtonPhoto,
  ButtonInfo,
  InfoButtonContainer,
  Name,
  TextContainer,
  Flavour,
  DoubleDamageFrom,
  Damage,
  DoubleDamage,
  DoubleDamageTo,
  Imune,
  ImunityTypeContainer,
  ItemInfoContainer,
  ItemName,
  ItemAttributesContainer,
  ItemAttributes,
  ItemShortEffect,
  RegionInfoContainer,
  RegionName,
  VersionGroups,
  Versions,
  MainGeneration,
  EasterEgg,
  EasterEggText,
} from './styles';
import { selectInfoMenu } from '../../store/info/info';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import themes from '../../utils/themes';
import PokemonType from '../Type';
import { useEffect, useState } from 'react';
import { getSpecie } from '../../api/specie/specie';
import { FlavorTextEntry } from '../../types/specie';
import { getPokemonTypeByName } from '../../api/pokemonTypes';
import { TypeInfo } from '../../types/pokemonTypes';
import {
  StyledType,
  TypeColoredIcon,
  TypeContent,
  TypeIcon,
} from '../Type/styles';
import { PantufaImage } from '../Photo/styles';

function getColoredIcon(type: string): string {
  const sourceImage = 'types/' + type.toLowerCase() + '.svg';
  return sourceImage;
}

function backgroundColor(type: string): string {
  return themes.colors.buttonColor[type as keyof typeof themes.colors.type];
}

function getIconSrc(type: string): string {
  const sourceImage = type.toLowerCase() + '.svg';
  return sourceImage;
}

export default function InfoPainel() {
  const dispatch = useDispatch();

  function handleClickPhoto() {
    dispatch(selectInfoMenu('photo'));
  }

  function handleClickInfo() {
    dispatch(selectInfoMenu('info'));
  }
  return (
    <InfoButtonContainer>
      <ButtonPhoto onClick={handleClickPhoto} data-cy="ButtonPhoto">
        PHOTO
      </ButtonPhoto>
      <ButtonInfo onClick={handleClickInfo} data-cy="ButtonInfo">
        INFO
      </ButtonInfo>
    </InfoButtonContainer>
  );
}

export function PokemonInfo() {
  const currentPokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon
  );
  const [pokemonFlavour, setPokemonFlavour] = useState<string>();

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
    currentPokemon.name && (
      <TextContainer>
        <Name>
          #{currentPokemon.id} {currentPokemon.name.toUpperCase()}
        </Name>
        <PokemonType pokemon={currentPokemon}></PokemonType>
        {pokemonFlavour && <Flavour>{pokemonFlavour}</Flavour>}
      </TextContainer>
    )
  );
}

export function PokemonTypeInfo() {
  const selectedType = useSelector((state: State) => state.type.selectedType);
  const [pokemonType, setPokemonType] = useState<TypeInfo | null>(null);

  useEffect(() => {
    const loadType = async () => {
      try {
        const typeInfo: TypeInfo = await getPokemonTypeByName(selectedType);
        setPokemonType(typeInfo);
      } catch (error) {
        console.error('Error loading Pokemon type:', error);
      }
    };

    loadType();
  }, [selectedType]);

  return (
    <TextContainer>
      <Name>{pokemonType?.name.toUpperCase()}</Name>
      <DoubleDamage>
        DOUBLE DAMAGE
        {pokemonType?.damage_relations?.double_damage_from.length !== 0 && (
          <DoubleDamageFrom>
            FROM:
            {pokemonType?.damage_relations?.double_damage_from?.map(
              (damageType) => (
                <Damage key={damageType.name}>
                  <TypeColoredIcon
                    src={getColoredIcon(damageType.name)}
                  ></TypeColoredIcon>
                </Damage>
              )
            )}
          </DoubleDamageFrom>
        )}
        {pokemonType?.damage_relations?.double_damage_to.length !== 0 && (
          <DoubleDamageTo>
            TO:
            {pokemonType?.damage_relations?.double_damage_to?.map(
              (damageType) => (
                <Damage key={damageType.name}>
                  <TypeColoredIcon
                    src={getColoredIcon(damageType.name)}
                  ></TypeColoredIcon>
                </Damage>
              )
            )}
          </DoubleDamageTo>
        )}
      </DoubleDamage>

      {pokemonType?.damage_relations?.no_damage_from.length !== 0 && (
        <Imune>
          IMUNITIES
          <ImunityTypeContainer>
            {pokemonType?.damage_relations?.no_damage_from.map(
              (type, index) => (
                <StyledType key={index} color={backgroundColor(type.name)}>
                  <TypeContent>
                    <TypeIcon
                      src={getIconSrc(type.name)}
                      alt={`${type.name} icon`}
                    />
                    {type.name.toUpperCase()}
                  </TypeContent>
                </StyledType>
              )
            )}
          </ImunityTypeContainer>
        </Imune>
      )}
    </TextContainer>
  );
}

export function ItemInfo() {
  const selectedItem = useSelector((state: State) => state.item.selectedItem);

  return (
    <ItemInfoContainer>
      <ItemName>
        #{selectedItem.id} - {selectedItem.name.toUpperCase()}
      </ItemName>
      <ItemShortEffect>
        {selectedItem?.effect_entries?.[0]?.short_effect ||
          'No short effect available'}
      </ItemShortEffect>

      <ItemAttributesContainer>
        {selectedItem.attributes?.map((attribute) => (
          <ItemAttributes key={attribute.name}>
            {attribute.name.toUpperCase()}
          </ItemAttributes>
        ))}
      </ItemAttributesContainer>
    </ItemInfoContainer>
  );
}

export function RegionInfo() {
  const selectedRegion = useSelector(
    (state: State) => state.regions.lists.selected
  );

  return (
    <RegionInfoContainer>
      <RegionName>
        #{selectedRegion.id} - {selectedRegion.name.toUpperCase()}
      </RegionName>
      <MainGeneration>
        {selectedRegion.main_generation?.name.toUpperCase()}
      </MainGeneration>
      <Versions>
        VERSIONS:
        {selectedRegion.version_groups?.map((version) => (
          <VersionGroups>{version.name.toUpperCase()}</VersionGroups>
        ))}
      </Versions>
    </RegionInfoContainer>
  );
}

export function LandingInfo() {
  return (
    <EasterEgg>
      <EasterEggText>A wild Pantufa appears!!</EasterEggText>
      <PantufaImage src="pantufa.png"></PantufaImage>
    </EasterEgg>
  );
}
