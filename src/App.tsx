import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { AuthProvider } from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/upload" component={Upload} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
      <Box mt={8}>
        <Footer />
      </Box>
    </AuthProvider>
  );
};

export default App;
