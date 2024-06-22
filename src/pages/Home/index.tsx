import { useEffect, useState } from 'react';
import {
  PokedexMobile,
  PokedexLandscape,
  PokedexTablet,
  PokedexWeb,
} from '../../components/Pokedex';
import { useWindowSize } from '../../utils/useWindowSize.hook';

function Home() {
  const { width, height } = useWindowSize();
  const [component, setComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (height < width && width < 1367) {
      setComponent(
        <PokedexLandscape
          size={height}
          aria-label="Pokedex in landscape mode"
        />
      );
    } else if (width < 600) {
      setComponent(<PokedexMobile aria-label="Pokedex in mobile mode" />);
    } else if (width < 1280) {
      setComponent(<PokedexTablet aria-label="Pokedex in tablet mode" />);
    } else {
      setComponent(<PokedexWeb aria-label="Pokedex in web mode" />);
    }
  }, [width, height]);

  return <>{component}</>;
}

export default Home;
