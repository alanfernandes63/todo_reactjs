import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import ListTodos from './components/ListTodos/index';
import { Provider } from 'react-redux';
import darkTheme from './Theme';
import store from './Store/Store';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Provider store={store}>
        <ThemeProvider theme={ darkTheme }>
          <CssBaseline>
            <Container maxWidth="sm">
              <ListTodos />
            </Container>
          </CssBaseline>
        </ThemeProvider>
        </Provider>
    </div>
  );
}

export default App;
