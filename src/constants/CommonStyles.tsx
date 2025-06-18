import {Platform, StyleSheet,ViewStyle} from 'react-native';
import { ImageStyle } from 'react-native';
import { TextStyle } from 'react-native';
import Colors from './Colors';
import FontFamily from './FontFamily';

type Style = {
  //TEXT
  f8_10: TextStyle;
  f10_12: TextStyle;
  f10_12_bold: TextStyle;
  f12_14: TextStyle;
  f12_14_bold: TextStyle;
  f14_h17: TextStyle;
  f14_h17_bold: TextStyle;
  f16_20: TextStyle;
  f16_20_bold: TextStyle;
  f18_22: TextStyle;
  f18_22_bold: TextStyle;
  //ICON
  icon24: ImageStyle;
  icon20: ImageStyle;
  icon16: ImageStyle;
  icon18: ImageStyle;
  icon26: ImageStyle;
  icon32: ImageStyle;
  //Style
  row: ViewStyle;
  shadow: ViewStyle;
};

const CommonStyles = StyleSheet.create<Style>({
    
  //TEXT
  f8_10: {
    fontSize: 8,
    lineHeight: 10,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoRegular,
  },
  f10_12: {
    fontSize: 10,
    lineHeight: 12,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoRegular,
  },
  f10_12_bold: {
    fontSize: 10,
    lineHeight: 12,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoBold,
  },
  f12_14: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoRegular,
  },
  f12_14_bold: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoBold,
  },
  f14_h17: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoRegular,
  },
  f14_h17_bold: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoBold,
  },
  f16_20: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoRegular,
  },
  f16_20_bold: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoBold,
  },
  f18_22: {
    fontSize: 18,
    lineHeight: 22,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoRegular,
  },
  f18_22_bold: {
    fontSize: 18,
    lineHeight: 22,
    color: Colors.N700,
    fontFamily: FontFamily.RobotoBold,
  },

  //ICON
  icon32: {
    height: 32,
    width: 32,
  },
  icon26: {
    height: 26,
    width: 26,
  },
  icon24: {
    height: 24,
    width: 24,
  },
  icon20: {
    height: 20,
    width: 20,
  },
  icon18: {
    height: 18,
    width: 18,
  },
  icon16: {
    height: 16,
    width: 16,
  },
  //Container
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
});
export default CommonStyles;