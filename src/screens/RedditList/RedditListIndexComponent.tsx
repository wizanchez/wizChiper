
import React from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { WizMessageAlert } from '../../vendor/wizFrameworkComponent/index';
import { ListItem, Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import wizStyles from '../../assets/styles/index';

export const WizListReddit = ({ data, children, navigation }: any)  => {
  const {
    val,
  } = data;
  if (val === false) {
    return <WizMessageAlert message='No se ha encontrado la lista' />
  }
  const keyExtractor = (item:{}, index:number) => index.toString()
  const RenderSubTitle = (props:{children:React.ReactNode, styles?:{} }) => <ListItem.Subtitle style={{...wizStyles.wizTextTitle__text__small, flex:1, ...props.styles}}>{props.children}</ListItem.Subtitle>;

  const renderItem = ( {item} : any) => {
    const {
      title,
      score_f,
      author,
      thumbnail,
      num_comments_f,
      created_utc_moment,
      link_flair_text
    } = item;

    const RenderItemTitle = () =><ListItem.Title style={{minHeight:50}}>{title}</ListItem.Title>;
    const RenderItemAvatar = () =>{
      if(thumbnail.includes("https://"))
        return <Avatar source={{uri: thumbnail}} overlayContainerStyle={{borderRadius:10}} size="large"/>;
      return <></>;
    }
    const RenderItemDate = () => (
      <View style={{ alignItems:'flex-end', width:'100%'}}>
        <RenderSubTitle >{created_utc_moment}</RenderSubTitle>
      </View>
    );

    const RenderItemFooter = () => (
      <View style={{ alignItems:'flex-end', width:'100%', flexDirection:'row'}}>
        <RenderSubTitle >{author}</RenderSubTitle>
        <RenderSubTitle >Score: <Text style={{fontWeight:'900'}}>{score_f}</Text></RenderSubTitle>
        <RenderSubTitle >Comments: <Text style={{fontWeight:'900'}}>{num_comments_f}</Text></RenderSubTitle>
      </View>
    );

    const goUrlSection = () => {
      navigation.navigate('RedditListShowUrl', {
        item,
      });
      //Alert.alert('aca boy');
    };

    return(
      <ListItem
        linearGradientProps={{
          colors: ['#FFFFFF', '#E2E2E2'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        Component={TouchableOpacity}
        ViewComponent={LinearGradient}
        containerStyle={{ margin:5, borderRadius:5, ...wizStyles.boxShadow }}
        onPress ={goUrlSection}
      >
        <RenderItemAvatar />
        <ListItem.Content>
          <RenderItemDate />
          <RenderItemTitle />
          <RenderItemFooter />
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <>
    <FlatList
      keyExtractor={keyExtractor}
      data={children}
      renderItem={renderItem}
    />
    </>
  )
}