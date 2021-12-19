import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("window");

const wizStyles = StyleSheet.create({
  container__center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  background__video: {
		height,
		position: "absolute",
		top: 0,
		left: 0,
		alignItems: "stretch",
		bottom: 0,
		right: 0
	},
  icon__logo__intro: {
    width:250,
		height:120,
  },
  wizFont__bold:{
		fontFamily: 'Quicksand-bo',
  },
  wizTextTitle__text:{
		fontFamily: 'Quicksand-bo',
		marginLeft:5,
		textShadowColor: 'rgba(0, 0, 0, 0.35)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 5
	},
  wizTextTitle__view:{
		width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingTop:15,
    padding:10,
    paddingLeft:10,
    paddingBottom:1
	},
	wizTextTitle__text__h1:{
		fontSize:40
	},
	wizTextTitle__text__h2:{
		fontSize:34
	},
	wizTextTitle__text__h3:{
		fontSize:28
	},
	wizTextTitle__text__h4:{
		fontSize:22
	},
	wizTextTitle__text__h5:{
		fontSize:16
	},
	wizTextTitle__text__h6:{
		fontSize:10
	},
  wizMaxWidthAndHeight: {
    width,
    height,
  },
  wizTextTitle__text__small:{
    fontSize:9,
    color:'gray',
  },
  icon__tab: {
    width: 30,
    height: 30,

  },
  WizMessageAlert__view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  boxShadow: {
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});
export default wizStyles;

export const wizBlueAzraq = '#4a69bd';
export const wizOrange = 'orange';
export const wizGreen = '#badc58';

export const wizColors = {
  gradien__template: ['#eeeeee', '#eeeeee', '#AAAAAA'],
  gradien__template__intro: ['#6CBDDD', '#385E89', '#23538a'],
  //gradienTemplateMain: ['rgba(1,177,196,1)', 'rgba(0,147,173,1)', 'rgba(1,96,121,1)', 'rgba(0,125,156,1)', 'rgba(1,96,121,1)', 'rgba(1,177,196,1)'],
  gradienTemplateMain: ['#E2E2E2', '#FFFFFF'],
  gradienTemplateRevert: ['#AAAAAA', '#eeeeee', '#eeeeee'],
  homeStack: {
    fondoBarra: '#012b51',
    activeTabColor: '#8BBC00',
    inactiveTabColor: '#DEE0DF',
  },
  /**
   * colors
   */
  wizOrange: {
    color: wizOrange,
  },
  wizBlueAzraq: {
    color: wizBlueAzraq,
  },
};

export const listColor = {
  wizGreen,
  wizGreen2: '#d2ff52',
  wizOrange,
  wizBlueAzraq,
  wizBlueAzraq2: '#33afd7',
  wizPurple: '#00001c',
  wizBottomBar: 'rgba(193,216,221,1)',
};

export const listHeaderHome = {
  headerTitleStyle: {
    color: '#f84503',
  },
  headerStyle: {
    backgroundColor: '#ededed',
  },
};