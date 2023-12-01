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
      setComponent(<PokedexLandscape size={height} />);
    } else if (width < 600) {
      setComponent(<PokedexMobile />);
    } else if (width < 1280) {
      setComponent(<PokedexTablet></PokedexTablet>);
    } else {
      setComponent(<PokedexWeb />);
    }
  }, [width, height]);

  return <>{component}</>;
}

export default Home;
