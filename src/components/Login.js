import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Login extends Component {
  constructor(props) {

    super(props);

    this.state = {
      email: '',
      password: '',
      error: '', loading: false
    };
  }
  async loginWithFacebook() {

    //ENTER YOUR APP ID
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('801319496897522', { permissions: ['public_profile'] })

    if (type == 'success') {

      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
        <Button onPress={this.loginWithFacebook()}>
          Log Out
        </Button>
        </CardSection>
      </Card>
    );
  }
}

export default Login;
