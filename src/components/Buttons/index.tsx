import { useEffect, useState } from 'react';
import { Button, ButtonContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainMenu } from '../../store/mainMenu/mainMenu';
import { State } from '../../types/pokemon';

interface ButtonsProps {
  onButtonClick?: (index: number) => void;
}

function ButtonsMenu({ onButtonClick }: ButtonsProps) {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const buttonLabels = ['POKEMON', 'TYPES', 'ITEMS', 'LOCATIONS'];
  const dispatch = useDispatch();
  const selected = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  useEffect(() => {
    handleButtonClick(selectedButton, selected);
  });

  const handleButtonClick = (buttonIndex: number, buttonLabel: string) => {
    setSelectedButton(buttonIndex);
    dispatch(selectMainMenu(buttonLabel));

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
          {label}
        </Button>
      ))}
    </ButtonContainer>
  );
}

export default ButtonsMenu;
