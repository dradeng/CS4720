import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Splash from './components/Splash';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please login" />
        <Scene key="signup" component={SignUp} title="Signup"/>
        <Scene key="splash" component={Splash} title="Splash" initial/>
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
