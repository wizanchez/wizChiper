import { useState, useLayoutEffect } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { WizListReddit } from './RedditListIndexComponent';
import { WizTemplateHome, WizindicatorUIActivity } from '../../vendor/wizFrameworkComponent/index';
import {listHeaderHome} from '../../assets/styles/index';
import { RootTabScreenProps } from '../../vendor/types';
import { useRedditList } from '../../vendor/services/reddit/index';
//import { Tab, TabView } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const renderHeader = (setOptions: any) => {
  setOptions({
    title: 'Reddit',
    ...listHeaderHome,
    headerRight: () => <View />,
  });
};
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
const RedditListIndex = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const infoRedditListing = useRedditList();
  const [index, setIndex] = useState(0);
  const { isLoaded, childrenMain, childrenCreate, childrenHot, childrenPopular } = infoRedditListing;
  const { setOptions } = navigation;
  useLayoutEffect(() => {
    renderHeader(setOptions);
  }, [navigation]);

  const handleIndex = (item:number) => {
    setIndex(item);
  };

  if (!isLoaded ) {
    return <WizindicatorUIActivity/>;
  }

  return (
    <Tab.Navigator >
      <Tab.Screen name="Main" children={()=><WizListReddit data={infoRedditListing} children={childrenMain} navigation={navigation}/>} />
      <Tab.Screen name="New" children={()=><WizListReddit data={infoRedditListing} children={childrenCreate} navigation={navigation}/>} />
      <Tab.Screen name="Hot" children={()=><WizListReddit data={infoRedditListing} children={childrenPopular} navigation={navigation}/>} />
      <Tab.Screen name="Popular" children={()=><WizListReddit data={infoRedditListing} children={childrenHot} navigation={navigation}/>} />
    </Tab.Navigator>
  );

  return (
    <WizTemplateHome
      preload={{}}
      withScrollView={false}
    >
      {
        !isLoaded ? (<WizindicatorUIActivity/>)
        :(<WizListReddit data={infoRedditListing} navigation={navigation} />)
      }
    </WizTemplateHome>
  );
}

export default RedditListIndex;
