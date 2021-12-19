import { useState, useLayoutEffect } from 'react';
import {
  // Text,
  View,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
import { WizTemplateHome} from '../../vendor/wizFrameworkComponent/index';
import {listHeaderHome} from '../../assets/styles/index';
import { RootTabScreenProps } from '../../vendor/types';


const renderHeader = (setOptions: any, title:string) => {
  setOptions({
    title: title,
    ...listHeaderHome,
    headerRight: () => <View />,
  });
};

export default function RedditListShowUrl({ navigation , route}: RootTabScreenProps<'TabOne'>) {
  const { item }:any = route.params;
  const { title, url } = item;
  const { setOptions } = navigation;
  useLayoutEffect(() => {
    renderHeader(setOptions, title);
  }, [navigation, title]);

  return <WebView style={{flex: 1,  marginTop: 1}} source={{ uri: url }}/>
}


