// https://jaka-tertinek.medium.com/custom-bottom-tab-navigator-react-native-cda675172dac
import React from 'react'; 

import {View, Pressable, Dimensions, StyleSheet, Text, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import moduleName from '../../';
import { Icon } from 'react-native-elements'
import wizStyles from '../../assets/styles/index';

// import NavigationIcon from './navigationIcon'; 

const {width} = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation}: any) => {
  return (
    <View style={[styles.mainContainer, wizStyles.boxShadow ]}>
      {state.routes.map((route: any , index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const isFocusedColor:string =isFocused?"rgba(200,215,220,.7)": "transparent";
        return (
          <View key = {index} style = {[styles.mainItemContainer,{borderRightWidth: label=="notes"? 3:0}]}>
            <Pressable
              onPress = {onPress}
              style = {{ borderRadius: 20, }}>
              <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15}}>
                <NavigationIcon route={label} isFocused={isFocused} state={state} index={index}/>
                {/* <Text>{label}</Text> */}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 5,
    backgroundColor: "rgba(255,255,255,.9)",
    borderRadius: 25,
    marginHorizontal: width*0.1
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
    borderRadius: 1, 
    borderColor: "#333B42",
    height: 35
  }, 
})


export default TabBar; 

interface NavigationIconProps {
  route: string, 
  isFocused: boolean,
  state:{},
  index: number
}
const  NavigationIcon = ({route, isFocused, state, index}: NavigationIconProps) => {
  const renderIcon = (route: string, isFocues: boolean) => {
    let height: number = 20;
    let width: number = 20;
    let infoIco : {} = {};

    switch(route) {
      case 'TabOne':
        infoIco = {
          ico: 'logo-reddit',
          title:'Reddit'
        };
        break;
      case 'TabTwo':
        infoIco = {
          ico: 'information-circle-outline',
          title: 'About'
        };
        break;
    }
    const iconColor:string = state.index === index ?"#FF4500" : "gray";
    const iconBold:string = state.index === index ?"bold" : "normal";

    return ( 
      <View style={{justifyContent:'center', alignItems:'center', height:23}}> 
        <Icon  name={infoIco.ico} type='ionicon' style={wizStyles.icon__tab} color={iconColor} size={25} />
        <Text style={{color:iconColor, fontSize:10, fontWeight: iconBold}}>{infoIco.title}</Text>
      </View>
    )
    /*switch (route) {
      case "home":
        return isFocues?<HomeSvg2 height={height} width={width} />: <HomeSvg height={height} width={width} />
      case "analytics":
        return isFocues?<ActivitySvg2 height={height} width={width} />: <ActivitySvg height={height} width={width} />
      case "notes":
        return isFocues?<EditSvg2 height={height} width={width} />: <EditSvg height={height} width={width} />
      case "settings":
        return isFocues?<SettingsSvg2 height={height} width={width} />:<SettingsSvg height={height} width={width} />
      default:
        break;
    }*/
  }

  return (
    <View>
      {renderIcon(route, isFocused)}
    </View>
  )
}