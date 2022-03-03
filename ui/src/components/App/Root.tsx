import React from 'react';
import Home from '../../views/Home';
import About from '../../views/About';
import Products from '../../views/Products';
import Contact from '../../views/Contact';
import MainTemplate from '../../templates/MainTemplate.js';
import GlobalStyle from '../../theme/GlobalStyles';
import { createAppStore } from '../../store';

import { basicRoute } from '../../routes/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../theme/theme';

export function App() {
  return (
    <Provider store={createAppStore()}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <MainTemplate> */}
          <Routes>
            <Route path='/admin' element={<Home />} />
            <Route path={basicRoute.products} element={Products} />
            <Route path={basicRoute.home} element={Home} />
            <Route path={basicRoute.about} element={About} />
            <Route path={basicRoute.contact} element={Contact} />
          </Routes>
          {/* </MainTemplate> */}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
