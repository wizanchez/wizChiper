import React from 'react';
import {
	Image,
} from 'react-native';
import wizStyles from '../../assets/styles/index';

const imageLogo	= require('../../assets/images/ico/logoChiper.png');

export const WizIconLogoIntro = ( props:{ styleExtra : {}}) =>{
  const {
    styleExtra
  } = props;
	return <Image
				source={imageLogo}
				style={{...wizStyles.icon__logo__intro, ...styleExtra }}
			/>
};