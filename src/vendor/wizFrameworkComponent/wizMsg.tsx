/** @module vendor/wizFrameWorkComponents/wizMsg */

import React from 'react';
import {
  View,
} from 'react-native';
import { Text } from 'react-native-elements';
import wizStyles, { wizOrange } from '../../assets/styles/index';

export const WizMessageAlert = (props :{ message: string }) => {
  const {
    message
  } = props;
  return  <View style={wizStyles.WizMessageAlert__view}>
    <View style={{backgroundColor: wizOrange, width:'95%', margin:20, padding: 20, borderRadius: 10}} >
      <Text h4>{message}</Text>
    </View>
  </View>
};