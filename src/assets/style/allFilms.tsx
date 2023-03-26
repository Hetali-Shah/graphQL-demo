import {Platform, StyleSheet} from 'react-native';
import StyleConfig from './config';
import {WINDOW} from '../../common/global';

export default StyleSheet.create({
  container: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  accordContainer: {
    padding: StyleConfig.countPixelRatio(5),
    paddingBottom: StyleConfig.countPixelRatio(2),
  },
  accordView: {
    margin: StyleConfig.countPixelRatio(0),
    padding: StyleConfig.countPixelRatio(2),
    backgroundColor: '#525bb7',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    shadowColor: '#fff',
    elevation: 8,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordHeader: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  accordDetailsView: {
    flex: 0.1,
    alignItems: 'flex-end',
  },
  accordTitle: {
    color: StyleConfig.white,
    fontSize: StyleConfig.fontSizeFieldTitle,
    fontFamily: StyleConfig.bold,
    textTransform: 'capitalize',
    flex: 0.8,
    paddingTop: StyleConfig.countPixelRatio(17),
    paddingLeft: StyleConfig.countPixelRatio(5),
  },
  filmName: {
    color: StyleConfig.black,
  },
  accordBody: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  borderRadiusView: {
    borderTopLeftRadius: StyleConfig.countPixelRatio(5),
    borderTopRightRadius: StyleConfig.countPixelRatio(5),
  },
  loaderStyle: {
    flex: 1,
    right: 0,
    left: 0,
    height:
      Platform.OS === 'ios'
        ? WINDOW.height
        : StyleConfig.countPixelRatio(WINDOW.height),
    width: WINDOW.width,
    backgroundColor: StyleConfig.black,
    opacity: 0.2,
  },
});
