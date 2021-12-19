/** @module screens/ProfileStack/ */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/**
 * screens
 */
import ProfileIndex from './ProfileIndex';

/**
 * @class Clase stack del modulos
 * @author @wizanchez <wizanchez@gmail.com>
 * @version 1.0-beta
 * @copyright
 */
const ProfileStack = () => {

	return (
		<Stack.Navigator
			initialRouteName="ProfileIndex"
      screenOptions={{ headerShown: false }}
		>
      <Stack.Screen name="ProfileIndex" component={ProfileIndex} />
		</Stack.Navigator>
	);
}
export default ProfileStack;