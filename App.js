import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from'@react-navigation/stack';

import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import HomeScreen from './screens/HomeScreen';

const stack = createStackNavigator()

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}} >
          <stack.Screen name='StarMap' component={StarMap}/>
          <stack.Screen name='DailyPic' component={DailyPic}/>
          <stack.Screen name='SpaceCrafts' component={SpaceCrafts}/>
          <stack.Screen name='HomeScreen' component={HomeScreen}/>
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}