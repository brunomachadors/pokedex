import Home from './pages/Home/index.jsx';
import './App.css';

import { ThemeProvider } from 'styled-components';
import theme from './utils/themes.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
