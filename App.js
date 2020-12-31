import React, {Component} from 'react';
// import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/containers/login';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );
  }
}
