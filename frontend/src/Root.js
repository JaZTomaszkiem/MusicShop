import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Contact from './views/Contact';
import MainTemplate from './templates/MainTemplate';
import GlobalStyle from './theme/GlobalStyles';
import store from './store';

import { basicRoute } from './routes/routes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path={basicRoute.products} component={Products} />
              <Route path={basicRoute.home} component={Home} />
              <Route path={basicRoute.about} component={About} />
              <Route path={basicRoute.contact} component={Contact} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
