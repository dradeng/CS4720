import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet, Animated } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';


class Splash extends Component {
  constructor(props) {
    super(props)
    this.x = new Animated.Value(0);
    this.y = new Animated.Value(0);
    this.state = {
      fadeAmin1: new Animated.Value(1),
      fadeAmin2: new Animated.Value(1),
      fadeAmin3: new Animated.Value(1),
    };
  }
  componentDidMount() {
    Animated.loop(
      Animated.stagger(600, [
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin1,
            {
              toValue: 0,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin1,
            {
              toValue: 1,
              duration: 1000,
            }
          )
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin2,
            {
              toValue: 0,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin2,
            {
              toValue: 1,
              duration: 1000,
            }
          )
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin3,
            {
              toValue: 0,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin3,
            {
              toValue: 1,
              duration: 1000,
            }
          )
        ])
      ]),
    {iterations: -1}
    ).start()
  }

  highlight() {
    //do nothing for now
  }
  render() {

    let { fadeAmin1, fadeAmin2, fadeAmin3 } = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#fff', height: '100%', justifyContent: 'center',alignItems: 'center'}}>
        <Animated.Image
          style={{opacity: fadeAmin1 }}
          source={require('../assets/1.png')}
        />
        <Animated.Image
          style={{opacity: fadeAmin2 }}
          source={require('../assets/2.png')}
        />
        <Animated.Image
          style={{opacity: fadeAmin3 }}
          source={require('../assets/3.png')}
        />
        <View style={{width: 258.11, height: 258.11, borderColor: 'rgba(57, 186, 255, .1)', borderWidth: 1, borderRadius: 124.055, justifyContent: 'center',alignItems: 'center'}}>
          <View style={{width: 195.2, height: 195.2, backgroundColor: 'rgba(57, 186, 255, .05)', borderRadius: 97.6, justifyContent: 'center',alignItems: 'center', borderColor: 'rgba(26,199,255,.15)'}}>
            <View style={{width: 131.4, height: 131.4, backgroundColor: 'rgba(57, 186, 255, .1)', borderRadius: 65.7, justifyContent: 'center',alignItems: 'center'}}>
              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image source={require('../assets/house.png')} />
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight
          onPress={this.highlight.bind(this)}
          underlayColor={'rgb(100,184,248)'}
          style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
          <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Get Started</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default Splash;
