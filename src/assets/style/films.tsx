import {StyleSheet} from 'react-native';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    height:'100%'
  },
  mainView:{
    flex:1,
    marginVertical: StyleConfig.countPixelRatio(5),
    marginHorizontal: StyleConfig.countPixelRatio(12),
    padding: StyleConfig.countPixelRatio(10),
    backgroundColor: StyleConfig.white,
    borderRadius: StyleConfig.countPixelRatio(7),
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    shadowColor: StyleConfig.gray,
    elevation: 5,
  },
  filmText:{
    textAlign:'justify',
    color: StyleConfig.black,
    fontFamily: StyleConfig.bold,
  },
  filmTextView:{
    flex:1,
    margin: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(5),
  },


  imageBack:{
    height:'80%',
    width:'100%'
  },
  safeAreaMainView:{
    flex:1,
    padding:StyleConfig.countPixelRatio(15),
    paddingHorizontal:StyleConfig.countPixelRatio(5),
  },
  backButton: {
    paddingTop: StyleConfig.countPixelRatio(20),
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bookTitle:{
    textAlign:'center',
    fontSize: StyleConfig.fontSizeH2,
    fontFamily: StyleConfig.bold,
    color: StyleConfig.white,
  },
  dateView:{
    width:"100%",
    justifyContent:'center',
    paddingTop:StyleConfig.countPixelRatio(30),
    alignItems:'center',
    flexDirection:'row'
  },
  dateNestedView:{
    paddingHorizontal:StyleConfig.countPixelRatio(5),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  dateText: {
    fontSize:StyleConfig.fontSizeSubParagraph,
    color:StyleConfig.white,
    padding:StyleConfig.countPixelRatio(5),
    textAlign:'center',
  },
  openingCrawlMainView: {
    paddingHorizontal:StyleConfig.countPixelRatio(10),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  openingCrawlIconView:{
    flex:0.4,
    flexDirection:'row'
  },
  openingCrawTitleText: {
    marginTop:'auto',
    flex:0.6,
    fontSize:StyleConfig.fontSizeFieldTitle,
    color:StyleConfig.white,
    fontFamily:StyleConfig.bold,
    padding:StyleConfig.countPixelRatio(5)
  },
  openingCrawText: {
    fontSize:StyleConfig.fontSizeParagraph,
    color:StyleConfig.white,
    fontFamily:StyleConfig.regular,
    padding:StyleConfig.countPixelRatio(5),
    lineHeight: StyleConfig.countPixelRatio(20)
  },
});
