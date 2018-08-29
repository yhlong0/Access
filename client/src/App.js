import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MiniDrawer from './components/Templates/MiniDrawer';
import { BrowserRouter as Router } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#2196f3',
      light: '#4dabf5', 
      dark: '#1769aa',
    }, 
    secondary: { 
      main: '#ff3d00',
      light: '#ff6333',
      dark: '#b22a00' 
    }, 
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <MiniDrawer />       
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
