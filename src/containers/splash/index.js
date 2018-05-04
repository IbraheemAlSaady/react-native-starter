/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Translate from 'utils/locales';

import Styles from './styles';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.logoTransoformAnimation = new Animated.Value(-500);
    this.textFadeInAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    SplashScreen.hide();

    Animated.spring(this.logoTransoformAnimation, {
      toValue: 0,
      duration: 1000,
    }).start(() => {
      
    });

    Animated.timing(this.textFadeInAnimation, {
      toValue: 1,
      delay: 500,
      duration: 400
    }).start();
  }

  render() {
    const position = {
      transform: [
        {
          translateY: this.logoTransoformAnimation.interpolate({
            inputRange: [-500, 0],
            outputRange: [-500, 0]
          })
        }
      ]
    };

    const opacity = this.textFadeInAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <View style={Styles.container}>
        <Animated.Image style={position} source={require('assets/icons/icon.png')} />
        <Animated.Text style={{ opacity }}>{Translate('login')}</Animated.Text>
      </View>
    );
  }
}

// setup splash on IOS: https://www.youtube.com/watch?time_continue=529&v=H0CC1UsvjDQ

export default Splash;
