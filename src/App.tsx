import React, { useCallback, useState } from 'react';
import GlobalStyle from './Styles/global';
import { ThemeProvider } from 'styled-components';
import light from './Styles/Theme/light';
import dark from './Styles/Theme/dark';
import DashBoard from './Pages/DashBoard';


function App() {
  const [theme, setTheme] = useState(dark);

  const themeTogller = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <DashBoard themeTogller={themeTogller} />
      </div>
    </ThemeProvider>

  );
}

export default App;
