import {StyleSheet} from 'react-native';
import StyleConfig from './config';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  appText: {
    color: StyleConfig.white,
    fontFamily: StyleConfig.bold,
    fontSize: StyleConfig.fontSizeLarge,
  },
  splashLoaderView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loaderView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
});
