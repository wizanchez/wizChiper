/** @module vendor/wizFrameWorkComponents/WizPreload */
/** /https://www.npmjs.com/package/react-native-indicators */
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import wizStyles, { wizGreen } from '../../assets/styles/index';
import {
  UIActivityIndicator,
} from 'react-native-indicators';

interface WizindicatorUIActivity {
  size?: number,
  color?: string,
  ViewSize?: string,
  text?: string,
  styleText?: {},
  flexDirection?: string,
  styleView?: {},
};
export const WizindicatorUIActivity = (props: WizindicatorUIActivity) => {
  const {
    size,
    color,
    text,
    ViewSize,
    styleText,
    styleView,
    flexDirection,
  } = props;

  const vSize:number = size || 20;
  const vViewSize = ViewSize;
  const vColor = color;
  const vSizeMore: number = (text) ? 20 : 2;
  const vSizeView = vSize + vSizeMore;
  const vText = text;
  const styleText2 = {
    color: wizGreen,
    ...wizStyles.wizFont__bold,
    ...styleText,
    marginLeft: 10,
  };
  const styleView2: {} = {
    ...styleView,
    width: vViewSize,
    alignItems: 'center',
    height: vSizeView,
    flexDirection,
  };

  return (
    <View style={styleView2}>
      <View>
        <UIActivityIndicator color={vColor} size={vSize} />
      </View>
      { vText && (<Text style={styleText2}>{vText}</Text>)}
    </View>
  );
};