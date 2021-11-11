import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
import Transaction from './screens/transaction';
import Search from './screens/search'
// or any pure javascript modules available in npm
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component {
  render(){
  return (
    <AppContainer />
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})
const AppContainer = createAppContainer(TabNavigator)