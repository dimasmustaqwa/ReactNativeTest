/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import AppNavigator from './AppNavigator';
import CalendarScreen from './activity/CalendarScreen';
import DetailCalendarScreen from './activity/DetailCalendarScreen';

class App extends Component {
  render() {
    return (
      <DetailCalendarScreen />
    );
  }
}

export default App;
