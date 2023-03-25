import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import { WINDOW } from "../../common/global";

export default StyleSheet.create({
  container: {
    backgroundColor: StyleConfig.white,
    flex: 1,
    padding: StyleConfig.countPixelRatio(5),
  },
  accordContainer: {
    paddingBottom: StyleConfig.countPixelRatio(5),
  },
  accordView:{
    margin: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(10),
    backgroundColor: StyleConfig.newBlue,
    borderRadius: StyleConfig.countPixelRatio(5),
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    shadowColor: StyleConfig.gray,
    elevation: 8,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordHeader: {
    flex: 0.9,
  },
  accordDetailsView:{
    flex: 0.1,
  },
  accordTitle: {
    color: StyleConfig.white,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily:StyleConfig.andaleMono,
    textTransform:'capitalize'
  },
  speciesText:{
    color: StyleConfig.newBlue,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily:StyleConfig.bold,
    textTransform:'capitalize',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    elevation: 8,
  },
  filmName: {
    color: StyleConfig.black,
  },
  accordBody: {
    flexWrap:'wrap',
    paddingHorizontal: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(20),
  },
  accordBodyButton :{
    height: WINDOW.width / 4,
    width: WINDOW.width / 4,
    justifyContent: 'space-between',
    alignItems:'center',
    alignSelf:'center',
    marginVertical: StyleConfig.countPixelRatio(0),
    marginHorizontal: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(0),
    backgroundColor: StyleConfig.white,
    borderRadius: StyleConfig.countPixelRatio(7),
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    shadowColor: StyleConfig.gray,
    elevation: 8,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});
