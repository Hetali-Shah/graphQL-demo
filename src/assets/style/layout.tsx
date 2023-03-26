import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import {WINDOW} from '../../common/global';

export default StyleSheet.create({
  imageView: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: StyleConfig.white,
    elevation: 8,
    borderBottomLeftRadius: StyleConfig.countPixelRatio(5),
    borderBottomRightRadius: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(5),
  },
  imagesView: {
    height: StyleConfig.countPixelRatio(50),
    width: StyleConfig.countPixelRatio(50),
    margin: StyleConfig.countPixelRatio(5),
  },
  accordBodyImage: {
    height: StyleConfig.countPixelRatio(100),
    width: StyleConfig.countPixelRatio(100),
    borderRadius: StyleConfig.countPixelRatio(25),
    justifyContent: 'center',
    alignItems: 'center',
    margin: StyleConfig.countPixelRatio(5),
  },
  speciesText: {
    paddingLeft: StyleConfig.countPixelRatio(8),
    color: StyleConfig.black,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily: StyleConfig.regular,
    textTransform: 'capitalize',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    elevation: 8,
  },
});
