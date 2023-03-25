import {PixelRatio, Platform} from 'react-native';
import {deviceType, WINDOW} from '../../common/global';

const iPhoneX = Platform.OS === 'ios' && WINDOW.height === 812;

const height =
  Platform.OS === 'ios'
    ? iPhoneX
      ? WINDOW.height - 78
      : WINDOW.height
    : WINDOW.height - 24;

const smartScale = value => {
  return PixelRatio.roundToNearestPixel(
    (WINDOW.width + WINDOW.height) *
      (value /
        (Platform.OS === 'ios' ? 1100 : WINDOW.height >= 1040 ? 1300 : 1100)),
  );
};

const screenPaddingValue = iPhoneX ? smartScale(17) : smartScale(26);

const scalarSpace = iPhoneX ? smartScale(11) : smartScale(13);

const getWidthByColumn = (column = 1) => {
  const totalPixel = WINDOW.width;
  const totalSpace = screenPaddingValue * 2 + scalarSpace * (column - 1);
  return (totalPixel - totalSpace) / column;
};

const AppColors = {
  //Color
  blue: '#2980B9',
  white: '#FFFFFF',
  black: '#000000',
  newBlue: '#3498DB',
};

export default {
  countPixelRatio: defaultValue => {
    return smartScale(defaultValue);
  },

  screen: {
    height,
  },

  // Fonts
  bold: 'Roboto-Bold',
  regular: 'Roboto-Regular',

  //Colors
  ...AppColors,

  //Font Size for Phone & Tablet
  headerHeight:
    Platform.OS === 'ios'
      ? iPhoneX
        ? smartScale(87)
        : smartScale(65)
      : smartScale(70),

  fontSizeParagraph: smartScale(deviceType == 'phone' ? 12 : 15),
  fontSizeSubParagraph: smartScale(deviceType == 'phone' ? 10 : 12),
  fontSizeLarge: smartScale(deviceType == 'phone' ? 32 : 38),
  fontSizeH1: smartScale(deviceType == 'phone' ? 28 : 32),
  fontSizeH2: smartScale(deviceType == 'phone' ? 18 : 25),
  fontSizeH3: smartScale(deviceType == 'phone' ? 15 : 18),
  fontSizeH4: smartScale(deviceType == 'phone' ? 13 : 15),
  fontSizeFieldTitle: smartScale(deviceType == 'phone' ? 15 : 17),
  fieldButtonFontSize: smartScale(10),

  //Buttons Config
  buttonHeightH1: smartScale(44),
  buttonHeightH2: smartScale(29),

  buttonTextH1: smartScale(deviceType == 'phone' ? 15 : 17),
  buttonTextH2: smartScale(deviceType == 'phone' ? 10 : 13),

  //Grid values
  screenPaddingValue: smartScale(16),
  scalarSpace: scalarSpace,
  getScreenPadding: screenPaddingValue,
  getWidthByColumn: (column = 1) => {
    return column == 3
      ? getWidthByColumn(2) + getWidthByColumn(4) + scalarSpace
      : getWidthByColumn(column);
  },
};
