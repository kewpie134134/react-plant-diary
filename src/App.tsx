import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/upload" component={Upload} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
};

export default App;
