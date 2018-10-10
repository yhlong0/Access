import React, { Component } from 'react';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
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

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security 
          issuer='https://dev-689245.oktapreview.com/oauth2/default'
          client_id='0oagkz02eecjzv4j90h7'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <MuiThemeProvider theme={theme}>
              <MiniDrawer />       
            </MuiThemeProvider>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
