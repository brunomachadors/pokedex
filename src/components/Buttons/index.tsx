import { useEffect, useState } from 'react';
import { Button, ButtonContainer, ButtonText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainMenu } from '../../store/mainMenu/mainMenu';
import { State } from '../../types/pokemon';

interface ButtonsProps {
  onButtonClick?: (index: number) => void;
}

function ButtonsMenu({ onButtonClick }: ButtonsProps) {
  const [selectedButton, setSelectedButton] = useState<number>(5);
  const buttonLabels = ['POKEMON', 'TYPES', 'ITEMS', 'LOCATIONS'];
  const dispatch = useDispatch();
  const selected = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  useEffect(() => {
    console.log(selectedButton);
    handleButtonClick(selectedButton, selected);
  });

  const handleButtonClick = (buttonIndex: number, buttonLabel: string) => {
    dispatch(selectMainMenu(buttonLabel));
    setSelectedButton(buttonIndex);

    if (onButtonClick) {
      onButtonClick(buttonIndex);
    }
  };

  return (
    <ButtonContainer>
      {buttonLabels.map((label, index) => (
        <Button
          key={index}
          selected={selectedButton === index}
          onClick={() => handleButtonClick(index, label)}
        >
          <ButtonText>{label}</ButtonText>
        </Button>
      ))}
    </ButtonContainer>
  );
}

export default ButtonsMenu;
