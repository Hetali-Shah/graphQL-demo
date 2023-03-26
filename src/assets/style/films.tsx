import {StyleSheet} from 'react-native';
import StyleConfig from './config';
import {WINDOW} from '../../common/global';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  imageBack: {
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },
  imageBackGround: {
    width: '100%',
    aspectRatio: 0.7,
  },
  safeAreaMainView: {
    padding: StyleConfig.countPixelRatio(15),
    paddingHorizontal: StyleConfig.countPixelRatio(5),
  },
  backButton: {
    paddingTop: StyleConfig.countPixelRatio(20),
    paddingHorizontal: StyleConfig.countPixelRatio(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookTitle: {
    textAlign: 'center',
    fontSize: StyleConfig.fontSizeH2,
    fontFamily: StyleConfig.bold,
    color: StyleConfig.white,
  },
  dateView: {
    width: '100%',
    justifyContent: 'center',
    paddingTop: StyleConfig.countPixelRatio(15),
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateNestedView: {
    paddingHorizontal: StyleConfig.countPixelRatio(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: StyleConfig.fontSizeSubParagraph,
    color: StyleConfig.white,
    padding: StyleConfig.countPixelRatio(5),
    textAlign: 'center',
  },
  openingCrawlMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: StyleConfig.countPixelRatio(15),
  },
  openingCrawlIconView: {
    flex: 0.4,
    flexDirection: 'row',
  },
  openingCrawTitleText: {
    marginTop: 'auto',
    flex: 0.6,
    fontSize: StyleConfig.fontSizeFieldTitle,
    color: StyleConfig.white,
    fontFamily: StyleConfig.regular,
  },
  openingCrawText: {
    fontSize: StyleConfig.fontSizeParagraph,
    color: StyleConfig.white,
    fontFamily: StyleConfig.regular,
  },
  producerMainView: {
    paddingHorizontal: StyleConfig.countPixelRatio(5),
    padding: StyleConfig.countPixelRatio(5),
  },
  producerView: {
    height: WINDOW.width / 4,
    width: WINDOW.width / 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: StyleConfig.white,
    borderRadius: StyleConfig.countPixelRatio(7),
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    shadowColor: '#000',
    elevation: 8,
  },
  speciesText: {
    color: StyleConfig.newBlue,
    fontSize: StyleConfig.fontSizeSubParagraph,
    fontFamily: StyleConfig.bold,
    textTransform: 'capitalize',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    elevation: 8,
  },
  producerTitleText: {
    fontSize: StyleConfig.fontSizeFieldTitle,
    color: StyleConfig.black,
    fontFamily: StyleConfig.bold,
    padding: StyleConfig.countPixelRatio(5),
  },
  imageView: {
    width: '100%',
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    elevation: 8,
  },
  openingView: {
    height: '76%',
    display: 'flex',
    paddingHorizontal: StyleConfig.countPixelRatio(15),
  },
  pipeSign: {
    fontSize: StyleConfig.countPixelRatio(20),
    color: StyleConfig.white,
  },
  imageSize: {
    height: 100,
    width: 100,
    borderRadius: StyleConfig.countPixelRatio(10),
    margin: StyleConfig.countPixelRatio(5),
  },
});
