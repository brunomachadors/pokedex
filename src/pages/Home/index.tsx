import { useEffect, useState } from 'react';
import {
  PokedexMobile,
  PokedexTablet,
  PokedexWeb,
} from '../../components/Pokedex';
import { useWindowSize } from '../../utils/useWindowSize.hook';

function Home() {
  const { width } = useWindowSize();
  const [component, setComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (width < 600) {
      setComponent(<PokedexMobile />);
    } else if (width < 1280) {
      setComponent(<PokedexTablet></PokedexTablet>);
    } else {
      setComponent(<PokedexWeb />);
    }
  }, [width]);

  return <>{component}</>;
}

export default Home;
