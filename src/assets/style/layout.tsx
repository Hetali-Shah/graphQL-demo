import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import {WINDOW} from '../../common/global';

export default StyleSheet.create({
  imageView: {
    width: '100%',
    backgroundColor: StyleConfig.white,
    elevation: 8,
    borderBottomLeftRadius: StyleConfig.countPixelRatio(5),
    borderBottomRightRadius: StyleConfig.countPixelRatio(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: StyleConfig.countPixelRatio(5),
  },
  accordBodyImage: {
    height: WINDOW.width / 3.5,
    width: WINDOW.width / 3.5,
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
});
