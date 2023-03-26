import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import {WINDOW} from '../../common/global';

export default StyleSheet.create({
  imageView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: StyleConfig.white,
    elevation: 8,
    borderBottomLeftRadius: StyleConfig.countPixelRatio(5),
    borderBottomRightRadius: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(10),
  },
  imagesView: {},
  accordBodyImage: {
    height: 100,
    width: 100,
    borderRadius: StyleConfig.countPixelRatio(10),
    margin: 5,
  },
  speciesText: {
    paddingTop: StyleConfig.countPixelRatio(5),
    color: StyleConfig.black,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily: StyleConfig.regular,
    textTransform: 'capitalize',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    elevation: 8,
    width: '50%',
  },
});
