import React, { Props, useLayoutEffect } from 'react';
import {View, Text} from 'react-native';
import {RootTabScreenProps} from '../../vendor/types';
import {
  WizTextTitle,
  WizIconLogoIntro,
  WizTemplateVideoIntro
} from '../../vendor/wizFrameworkComponent';

const IntroIndex = ({ navigation }: any) => {
  // eslint-disable-next-line no-unused-vars
  const msg = 'ss';
  const {
    setOptions,
  } = navigation;

  useLayoutEffect(() => {
    setTimeout(() => navigation.replace('MenuStack'), 6000);
  }, [navigation]);

  return (
    <WizTemplateVideoIntro>
      <WizIconLogoIntro styleExtra={{ marginTop:70}} />
      <WizTextTitle type={3} center={true} color='orange' >{'Ejercicio entrevista React Native'}</WizTextTitle>
    </WizTemplateVideoIntro>
  );
};

export default IntroIndex;
