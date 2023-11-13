import { useState } from 'react';
import { Button, ButtonContainer } from './styles';

interface ButtonsProps {
  onButtonClick?: (index: number) => void;
}

function ButtonsMenu({ onButtonClick }: ButtonsProps) {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const buttonLabels = ['POKEMON', 'TYPES', 'ITEMS', 'LOCATIONS'];

  const handleButtonClick = (buttonIndex: number) => {
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
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </Button>
      ))}
    </ButtonContainer>
  );
}

export default ButtonsMenu;
