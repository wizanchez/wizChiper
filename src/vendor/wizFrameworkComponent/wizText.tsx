

import React, { Component } from 'react';
import { View, Text ,Platform ,Image} from 'react-native';
import wizStyles from '../../assets/styles/index';
import { PropsTitle } from '../types';

export const WizTextTitle = (props : PropsTitle)=>{

	const {
		type,
		children,
		style ,
		center,
		color,
		subtitle,
		viewStyle,
		imageLeft
	} = props;

	const tAlign: string = center === true?`center`:`left`;
	const paddinTopSub: {} = {paddingTop:1,paddingBottom:10,paddingLeft:10};
	const subtitleTra: React.ReactNode = subtitle ? <View ><WizTextTitle type={6} color={'#636e72'} style={{textShadowRadius:4,...paddinTopSub}} >{subtitle}</WizTextTitle></View>:null;

	const generalStyles: {} = {textAlign:tAlign , color , ...wizStyles.wizTextTitle__text, ...style };

	return (
		<View {...viewStyle} >
			{
				(type === 1) ?(<View style={wizStyles.wizTextTitle__view}><Text style={ [ generalStyles , wizStyles.wizTextTitle__text__h1 ]} >{children}</Text></View>)
				:(type === 2)?(<View style={wizStyles.wizTextTitle__view}><Text style={ [ generalStyles , wizStyles.wizTextTitle__text__h2 ]} >{children}</Text></View>)
				:(type === 3)?(<View style={wizStyles.wizTextTitle__view}><Text style={ [ generalStyles , wizStyles.wizTextTitle__text__h3 ]} >{children}</Text></View>)
				:(type === 4)?(<View style={wizStyles.wizTextTitle__view}><Text style={ [ generalStyles , wizStyles.wizTextTitle__text__h4 ]} >{children}</Text></View>)
				:(type === 5)?(<View style={wizStyles.wizTextTitle__view}><Text style={ [ generalStyles , wizStyles.wizTextTitle__text__h5 ]} >{children}</Text></View>)
				:<Text style={ [ generalStyles , wizStyles.wizTextTitle__text__h6 ]} >{children}</Text>
			}
			{subtitleTra}
		</View>
	);
}