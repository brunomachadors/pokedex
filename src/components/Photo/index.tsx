import { useSelector } from 'react-redux';
import themes from '../../utils/themes';
import {
  Button,
  GitAccount,
  GitImage,
  ModalContent,
  RegionName,
  StyledImage,
  StyledImageMap,
  StyledItemImageLarge,
  StyledModal,
  StyledPokemoneImage,
  StyledRegionImage,
  StyledRegionImageContainer,
  StyledTypeImage,
} from './styles'; // Import TypeContent
import { State } from '../../types/pokemon';
import { Name, TextContainer } from '../Info/styles';
import { Categoryitem, StyledItemCategory } from '../Display/styles';
import { MAPS } from '../../utils/regionMaps';
import { useEffect, useState } from 'react';

function PokemonPhoto() {
  const selectedPokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TextContainer>
      {selectedPokemon.name && (
        <StyledImage
          key={selectedPokemon.id}
          src={selectedPokemon.image}
          alt="selectedPokemon"
          onClick={openModal}
        />
      )}
      {isModalOpen && (
        <StyledModal onClick={closeModal}>
          <ModalContent>
            <StyledPokemoneImage
              src={selectedPokemon.image}
              alt="Pokemon Image"
            />
          </ModalContent>
        </StyledModal>
      )}
    </TextContainer>
  );
}

export function TypePhoto() {
  const selectedType = useSelector(
    (state: State) => state.type.selectedType
  ) as keyof typeof themes.colors.background;

  function getColoredIcon(type: string): string {
    const sourceImage = 'types/' + type.toLowerCase() + '.svg';
    return sourceImage;
  }

  return (
    <StyledTypeImage
      key={selectedType}
      src={getColoredIcon(selectedType)}
      alt="selectedPokemon"
    />
  );
}

export function ItemPhoto() {
  const selectedItem = useSelector((state: State) => state.item.selectedItem);

  return (
    <TextContainer>
      <Name style={{ color: 'white' }}>{selectedItem.name.toUpperCase()}</Name>

      <StyledItemImageLarge
        key={selectedItem.id}
        src={selectedItem.sprites?.default}
        alt="selectedItem"
      />
      <Categoryitem>
        Category:
        <StyledItemCategory>
          {selectedItem.category?.name.toUpperCase()}
        </StyledItemCategory>
      </Categoryitem>
    </TextContainer>
  );
}

export function RegionPhoto() {
  const selectedRegion = useSelector(
    (state: State) => state.regions.lists.selected
  );
  const [regionImage, setRegionIMage] = useState('');

  useEffect(() => {
    setRegionIMage(MAPS[selectedRegion.name as keyof typeof MAPS]);
  }, [selectedRegion.name]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TextContainer>
      <StyledRegionImageContainer>
        <RegionName>{selectedRegion.name.toUpperCase()}</RegionName>
        <StyledRegionImage
          src={regionImage}
          onClick={openModal}
        ></StyledRegionImage>
      </StyledRegionImageContainer>

      {isModalOpen && (
        <StyledModal onClick={closeModal}>
          <ModalContent>
            <StyledImageMap src={regionImage} alt="Region Map" />
          </ModalContent>
        </StyledModal>
      )}
    </TextContainer>
  );
}

export function LandingPhoto() {
  const redirectToGitHub = () => {
    window.open('https://github.com/brunomachadors', '_blank');
  };
  return (
    <>
      <StyledImage
        src="https://i.gifer.com/4tym.gif"
        id="pikachuGif"
      ></StyledImage>
      <Button onClick={redirectToGitHub}>
        <GitAccount id="gitAccount">
          <GitImage src="icons/git.png" />
          {'/brunomachadors'.toUpperCase()}
        </GitAccount>
      </Button>
    </>
  );
}

export default PokemonPhoto;
