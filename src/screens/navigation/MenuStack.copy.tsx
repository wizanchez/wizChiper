

import * as React from 'react';
import {
  Image,
  ColorSchemeName,
  Pressable
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../vendor/types';
import {useColorScheme} from '../../vendor/hooks/useColorScheme';
import Colors from '../../../constants/Colors';
import RedditStack from '../RedditList/RedditStack';
import ProfileStack from '../Profile/ProfileStack';
import wizStyles from '../../assets/styles/index';

const iconReddit = require('../../assets/images/ico/reddit_icon.svg');
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF4500',
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={RedditStack}
        options={({ navigation }) => ({
          title: 'Reddit List',
          tabBarIcon: ({ color }) => <Icon  name='logo-reddit' type='ionicon' style={wizStyles.icon__tab} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={ProfileStack}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <Icon  name='information-circle-outline' type='ionicon' style={wizStyles.icon__tab} color={color} />, //<TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigator;