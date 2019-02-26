import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please login" />
        <Scene key="signup" component={SignUp} title="Signup" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
