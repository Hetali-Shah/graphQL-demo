import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import { WINDOW } from "../../common/global";

export default StyleSheet.create({
  container: {
    flex:1
  } ,
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
  }
});
