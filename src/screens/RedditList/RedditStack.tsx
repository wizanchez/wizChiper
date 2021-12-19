/** @module screens/redditStack/ */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/**
 * screens
 */
import RedditListIndex from './RedditListIndex';
import RedditListShowUrl from './RedditListShowUrl';


/**
 * @class Clase stack del modulos
 * @author @wizanchez <wizanchez@gmail.com>
 * @version 1.0-beta
 * @copyright
 */
const RedditStack = () => {

	return (
		<Stack.Navigator
			initialRouteName="RedditListIndex"
      screenOptions={{ headerShown: true }}
		>
      <Stack.Screen name="RedditListIndex" component={RedditListIndex} />
			<Stack.Screen name="RedditListShowUrl" 	component={RedditListShowUrl} />
		</Stack.Navigator>
	);
}
export default RedditStack;