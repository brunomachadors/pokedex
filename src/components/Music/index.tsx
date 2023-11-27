import { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface AudioElement extends HTMLAudioElement {
  volume: number;
}

const StyledAudioPlayer = styled.audio`
  width: 40%;
  background-color: transparent;
`;

export const Music = () => {
  const audioRef = useRef<AudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <StyledAudioPlayer controls ref={audioRef}>
      <source src="opening.mp3" type="audio/mp3" />
    </StyledAudioPlayer>
  );
};
