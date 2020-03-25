import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline , createMuiTheme } from "@material-ui/core";
import ListTodos from './components/ListTodos/index';
function App() {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      //text:{secondary:'#00FF7F'},
      primary:{main:'#00FF7F'}
    },
  });

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <ThemeProvider theme={ darkTheme }>
          <CssBaseline>
            <Container maxWidth="sm">
              <ListTodos />
            </Container>
          </CssBaseline>
        </ThemeProvider>
    </div>
  );
}

export default App;
