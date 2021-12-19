
/* eslint-disable import/prefer-default-export */
/** @module vendor/wizFrameWorkComponent/wizTemplate */
import React, { useEffect } from 'react';
import {
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { ReactProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio, Video } from 'expo-av';
import wizStyles, { wizColors, listColor } from '../../assets/styles/index';
import { WizTextTitle } from './wizText';
import { SafeAreaView } from 'react-native-safe-area-context';
const uriVideo 	= require("../../assets/video/videoIntro.mp4");
import { ListItem, Avatar } from 'react-native-elements';

/**
 * @function
 * @description function template to generate a gradien
 * @author @wizanchez <wizanchez@gmail.com>
 * @since 2021/12/17
 * @version 1.0.0
 * @param  {json} props para enviar al template
 * @param  {json} props.children hijos del template
 * @return {tag} retorna el template
 */
export const WizTemplateGradient = (props: ReactProps ) => {
  const {
    children
  } = props;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={wizStyles.container__center}
    >
      <LinearGradient
        colors={wizColors.gradien__template__intro}
        style={{ ...wizStyles.container__center, width: '100%' }}
      >
        { children }
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export const WizTemplateVideoIntro = (props: ReactProps ) => {
  const {
    children
  } = props;
  return (
    <View style={ wizStyles.container__center } >
      <Video
        source={uriVideo}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={ wizStyles.background__video }
      />
        {children}
    </View>
  );
};

/**
 * @function
 * @description function del template que genera un gradien, utilizada para el sistema de login
 * @author @wizanchez <wizanchez@gmail.com>
 * @since 2018/11/24
 * @version 1.0.0
 * @param  {json} props para enviar al template
 * @param  {json} props.children hijos del template
 * @return {tag} retorna el template
 */
export const WizTemplateGradientMain = (props: ReactProps ) => {
  const {
    children
  } = props;
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const paddingTop = Platform.OS === 'ios' ? 0 : 30;
  const marginTop = Platform.OS === 'ios' ? 65 : 40;
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={{ flex: 1, flexDirection: 'column' }}
    >
      <LinearGradient
        colors={wizColors.gradienTemplateMain}
        style={{ flex: 1, flexDirection: 'column' }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.2, y: 0 }}
      >
        {/* <SafeAreaView style={{ paddingTop, marginTop, flex: 1 }}> */}
          { children }
        {/* </SafeAreaView> */}
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
/**
 * @function
 * @description function of the template in backgroung blac ans status bar
 * @author @wizanchez <wizanchez@gmail.com>
 * @since
 * @version 1.0.0
 * @param  { tag } {children=<tag> hijos del componente
 * @param  { tag } headerSubComponent} si tiene un subcontenido
 * @return {tag} retorna el template
 */
interface PropsTemplateHome {
  title?: string;
  children?: React.ReactNode;
  headerSubComponent?: React.ReactNode;
  bottomComponent?: React.ReactNode;
  preload:{
    preloadTitle?: string | undefined;
    preloadVisible?: boolean;
    preloadType?: string;
    preloadMsg?: string;
    preloadAnimationIn?: string;
    prealodAnimationOut?: string;
  };
  withScrollView: boolean;
};

export const WizTemplateHome = (props: PropsTemplateHome) => {
  const {
    title,
    children,
    headerSubComponent,
    bottomComponent,
    preload: {
      preloadTitle,
      preloadVisible,
      preloadType,
      preloadMsg,
      preloadAnimationIn,
      prealodAnimationOut,
    },
    withScrollView,
  } = props;

  const preloadTitle2 : string = preloadTitle || 'WizApp';
  const preloadType2 = preloadType || '__PRELOAD__';
  const preloadMsg2 = preloadMsg || 'Cargando Información';
  const preloadAnimationIn2 = preloadAnimationIn || 'zoomIn';
  const prealodAnimationOut2 = prealodAnimationOut || 'zoomOut';

  useEffect(() => {

  });

  const WizTextTitleStyle = { color: 'black', ...wizStyles.wizFont__bold, paddingStart: 10 };
  return (
    <WizTemplateGradientMain>
      <SafeAreaView>
        {title && (<WizTextTitle type={3} style={WizTextTitleStyle}>{title}</WizTextTitle>)}
        {headerSubComponent}
        <>
          {
            withScrollView === true ? (
              <ScrollView style={{ width: '100%', paddingBottom: 3 }}>
                {children}
              </ScrollView>
            ) : (
              <View style={{ width: '100%', paddingBottom: 3 }}>
                {children}
              </View>
            )
          }
          {bottomComponent && (
            <View style={{ backgroundColor: listColor.wizBottomBar }}>
              {bottomComponent}
            </View>
          )}
        </>
      </SafeAreaView>
    </WizTemplateGradientMain>
  );
};

export const WizTemplateBox = (props: ReactProps ) => {
  const {
    children
  } = props;

  return (
    <ListItem
      linearGradientProps={{
        colors: ['#FFFFFF', '#E2E2E2'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
      }}
      ViewComponent={LinearGradient}
      containerStyle={{ margin:5, borderRadius:5, ...wizStyles.boxShadow }}
    >
      <View style={{flexDirection:'column',  width:'100%'}}>
        {children}
      </View>
    </ListItem>
  );
}