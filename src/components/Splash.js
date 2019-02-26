import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  highlight() {
    //do nothing for now
  }
  render() {
    return (
      <View>
          <TouchableHighlight onPress={this.highlight.bind(this)} underlayColor={'rgb(100,184,248)'}  style={{backgroundColor: 'rgb(73,165,248)'}}>
            <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Get Started</Text>
          </TouchableHighlight>

      </View>
    );
  }
}

export default Splash;
