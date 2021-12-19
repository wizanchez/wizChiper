/** @module screens/Profile/ProfileStack */
import React from 'react';
import { IntroStackParamList } from '../../vendor/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<IntroStackParamList>();

import IntroIndex from '../Intro/IntroIndex';

/**
 * @class Clase se encarga del stack del modulo payment
 * @author @wizanchez <wizanchez@gmail.com>
 * @version 1.0-beta
 * @copyright rsn.com.co
 */
const IntroStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="IntroIndex" component={IntroIndex} />
  </Stack.Navigator>
);

export default IntroStack;
