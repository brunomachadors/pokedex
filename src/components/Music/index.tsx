import { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface AudioElement extends HTMLAudioElement {
  volume: number;
}

const StyledAudioPlayer = styled.audio`
  width: 250px;
  background-color: transparent;
  position: relative;
  bottom: 0;
  left: 0;

  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.55);
`;

export const Music = () => {
  const audioRef = useRef<AudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <StyledAudioPlayer controls ref={audioRef} id="music">
      <source src="opening.mp3" type="audio/mp3" />
    </StyledAudioPlayer>
  );
};
