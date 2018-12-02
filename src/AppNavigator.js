import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image,
  StatusBar,
  TouchableHighlight
} from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Home from "./activity/home";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const HomeStack = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home
    },
    Detail: {
      screen: DetailsScreen
    },
  },
);

const DetailStack = createStackNavigator(
  {
    Detail: {
      screen: DetailsScreen
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeStack },
  },
);

export default AppNavigator;
