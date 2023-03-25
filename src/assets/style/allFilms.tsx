import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import {WINDOW} from '../../common/global';

export default StyleSheet.create({
  container: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  accordContainer: {
    padding: StyleConfig.countPixelRatio(5),
    paddingBottom: StyleConfig.countPixelRatio(5),
  },
  accordView: {
    margin: StyleConfig.countPixelRatio(0),
    padding: StyleConfig.countPixelRatio(10),
    backgroundColor: StyleConfig.newBlue,
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
  accordDetailsView: {
    flex: 0.1,
  },
  accordTitle: {
    color: StyleConfig.white,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily: StyleConfig.bold,
    textTransform: 'capitalize',
  },
  speciesText: {
    paddingTop: StyleConfig.countPixelRatio(5),
    color: StyleConfig.navyDark,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily: StyleConfig.regular,
    textTransform: 'capitalize',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    elevation: 8,
  },
  filmName: {
    color: StyleConfig.black,
  },
  accordBody: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  accordBodyImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});
