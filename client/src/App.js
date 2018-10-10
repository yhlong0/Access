import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MiniDrawer from './components/Templates/MiniDrawer';
import Login from './components/auth/Login';
import Secure from './components/Pages/SecurePage';

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
              <SecureRoute path='/secure' exact={true} component={Secure} />
              <Route 
                path='/login' 
                render={() => <Login baseUrl='https://dev-689245.oktapreview.com' />} 
              />
              <Route path='/implicit/callback' component={ImplicitCallback} />       
            </MuiThemeProvider>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
