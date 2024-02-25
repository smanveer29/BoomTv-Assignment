import React, {useMemo} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {screenContants} from '../components/constants';
import LoginScreen from './LoginScreen';
import GameScreen from './GameScreen';
import HistoryScreen from './HistoryScreen';

const RootStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenContants.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screenContants.GAME} component={GameScreen} />
      <Stack.Screen name={screenContants.HISTORY} component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
