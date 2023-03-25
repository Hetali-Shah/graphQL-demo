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
  navyDark: '#1F2F3C',
  navyMediumDark: '#233A5B',
  navyMediumLight: '#6D8190',
  navyLight: '#B2BBC2',
  skyblue: '#87ceeb',
  blue: '#2980B9',
  conectratedBlue: '#26436F',
  red: '#E74C3C',
  conectratedRed: '#993025',
  tan: '#E0E2D5',
  orange: '#FF9C1D',
  purple: '#6A5C7F',
  teal: '#229499',
  tealDark: '#146e72',
  buttonGreen: '#1B8633',
  green: '#1DA213',
  gray: '#747474',
  mediumgray: '#808080',
  lightGray: '#909AAB',
  arrowGray: '#D7D7D7',
  white: '#FFFFFF',
  whiteFullLight: 'rgba(255,255,255,0.3)',
  whiteMediumLight: 'rgba(255,255,255,0.8)',
  black: '#000000',
  blackMediumLight: 'rgba(0,0,0,0.5)',
  newBlue: '#3498DB',
  selectedItem: '#F6F6F6',
  activeGray: '#464646',
  activeDarkGreen: '#10511F',
  activeBrown: '#9B5E11',
  activeBlue: '#184D70',
  progressBlue: '#277AB1',
  progressGreen: '#1F973A',
  progressOrange: '#F5951B',
  completedBlue: '#2980B9',
  recoverGreen: '#1B8633',
  clementine: '#ed6000',
  iron: '#DADFE0',
  ironLight: '#cdd2d3',
  catlinaBlue: '#273C5A',
  brilliantRose: '#FF1D78',
  ziggurat: '#BCDDDF',
  seagull: '#7AB2E9',
  mercury: '#E4E4E4',
  silver: '#B9B9B9',
  lightGreen: '#CBE6D1',
  lightgreen: '#E2F2E4',
  lightWeightGreen: 'rgba(226, 242, 228, 0.3)',
  lightyellow: '#fff1d8',
  lightWeightGray: 'rgba(228, 228, 228, 0.4)',
  lightCatlinaBlue: '#213149',
  lightGreen2: '#67CE67',
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
