import Home from './views/Home';
import MainTemplate from './templates/MainTemplate';
import GlobalStyle from './theme/GlobalStyles';
import store from './store';
import { basicRoute } from './routes/routes';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
              <Route path={basicRoute.home} component={Home} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
