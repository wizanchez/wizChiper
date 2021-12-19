import { useState, useLayoutEffect } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  WizTextTitle,
  WizTemplateBox,
  WizTemplateHome,
} from '../../vendor/wizFrameworkComponent/index';

import { RootTabScreenProps } from '../../vendor/types';
import {listHeaderHome} from '../../assets/styles/index';
import { Icon, Avatar, Divider } from 'react-native-elements';

const imgProfile = require('../../assets/images/photo/luisSanchez.jpg');
const ProfileIndexHeader = () => (
  <View style={{flexDirection:'row', alignItems:'center', marginBottom:15}}>
    <Avatar  rounded size="xlarge" source={imgProfile}/>
    <WizTextTitle type={3} center={true} color='#625d8f' >{'Luis Sánchez'}</WizTextTitle>
  </View>
);

const ProfileIndexSocial = () => (
  <View style={{  flexDirection:'row', justifyContent:'center'}}>
    <Icon reverse size={20} name='sc-telegram'  type='evilicon'  color='#517fa4'/>
    <Icon reverse size={20} name='logo-facebook'  type='ionicon'  color='#1976f2'/>
    <Icon reverse size={20} name='logo-instagram'  type='ionicon'  color='#ed812e'/>
    <Icon reverse size={20} name='logo-linkedin'  type='ionicon'  color='#0a66c2'/>
    <Icon reverse size={20} name='logo-google'  type='ionicon'  color='gray'/>
    <Icon reverse size={20} name='logo-github'  type='ionicon'  color='black'/>
  </View>
)

const ProfileIndexInfo = () => (
  <>
    <WizTextTitle type={5} center={true} color='#34324a' subtitle={'Nombre'} >{'Luis Fernando Sánchez García'}</WizTextTitle>
    <WizTextTitle type={5} center={true} color='#34324a' subtitle={'Teléfono'} >{'(+57) 314 293 01 79'}</WizTextTitle>
    <WizTextTitle type={5} center={true} color='#34324a' subtitle={'Ciudad Domicílio'} >{'Bogotá D.C'}</WizTextTitle>
    <WizTextTitle type={5} center={true} color='#34324a' subtitle={'Edad'} >{'40 años'}</WizTextTitle>
  </>
)

const ProfileIndex = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

  return (
    <WizTemplateHome
      preload={{}}
      withScrollView={true}
      title={'Developer'}
    >
      <WizTemplateBox>
        <ProfileIndexHeader />
        <Divider orientation="horizontal"/>
        <ProfileIndexSocial />
      </WizTemplateBox>
      <WizTemplateBox>
        <ProfileIndexInfo />
      </WizTemplateBox>
    </WizTemplateHome>
  )
}

export default ProfileIndex;
