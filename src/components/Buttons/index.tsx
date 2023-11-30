import { useEffect, useState } from 'react';
import { Button, ButtonContainer, ButtonIcon, ButtonText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainMenu } from '../../store/mainMenu/mainMenu';
import { State } from '../../types/pokemon';

interface ButtonsProps {
  onButtonClick?: (index: number) => void;
}

function ButtonsMenu({ onButtonClick }: ButtonsProps) {
  const [selectedButton, setSelectedButton] = useState<number>(5);
  const buttonLabels = ['POKÉMON', 'TYPES', 'ITEMS', 'REGIONS'];
  const dispatch = useDispatch();
  const selected = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  useEffect(() => {
    handleButtonClick(selectedButton, selected);
  });

  const handleButtonClick = (buttonIndex: number, buttonLabel: string) => {
    dispatch(selectMainMenu(buttonLabel));
    setSelectedButton(buttonIndex);

    if (onButtonClick) {
      onButtonClick(buttonIndex);
    }
  };
  const getIcon = (label: string) => {
    const icon = `icons/${label.toLowerCase()}.png`;

    return icon;
  };

  return (
    <ButtonContainer id="buttonContainer">
      {buttonLabels.map((label, index) => (
        <Button
          id={label}
          key={index}
          selected={selectedButton === index}
          onClick={() => handleButtonClick(index, label)}
        >
          <ButtonIcon src={getIcon(label)}></ButtonIcon>
          <ButtonText>{label}</ButtonText>
        </Button>
      ))}
    </ButtonContainer>
  );
}

export default ButtonsMenu;
