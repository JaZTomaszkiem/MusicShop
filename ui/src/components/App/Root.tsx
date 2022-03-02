import React from 'react';
import Admin from '../../views/Admin';
import About from '../../views/About';
import Products from '../../views/Products';
import Contact from '../../views/Contact';
import MainTemplate from '../../templates/MainTemplate';
import GlobalStyle from '../../theme/GlobalStyles';
import { createAppStore } from '../../store';

import { basicRoute } from '../../routes/routes';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../theme/theme';

export function App() {
  return (
    <Provider store={createAppStore()}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <MainTemplate>
            <Routes>
              <Route path='/admin' element={<Admin />} />
              <Route path={basicRoute.products} element={<Products />} />
              <Route path={basicRoute.about} element={<About />} />
              <Route path={basicRoute.contact} element={<Contact />} />
            </Routes>
          </MainTemplate>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

const Template = () => (
  <>
    <Link to='/admin'>
      <button>admin</button>
    </Link>
  </>
);

export default App;
