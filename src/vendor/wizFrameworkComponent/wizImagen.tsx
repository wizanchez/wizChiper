/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Image,
} from 'react-native';

import wizStyles from '../../assets/styles';
const imgLogoApp = require('../../assets/images/favicon.png');


export const ImageLogoMain = (props: { width: number, height: number, style: {} }) => {
  const {
    width,
    height,
    style
  } = props;
  <Image
    source={imgLogoApp}
    style={{
      width,
      height,
      marginBottom: 20,
      ...style,
    }}
  />
  };

