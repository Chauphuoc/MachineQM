import {Dimensions, PixelRatio, Platform, NativeModules} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const {width, height} = Dimensions.get('window');
const androidWidth =
  Platform.OS === 'android' ? ExtraDimensions.getRealWindowWidth() : width;
const androidHeight =
  Platform.OS === 'android' ? ExtraDimensions.getRealWindowHeight() : height;
const ih = height / 100;
const iw = width / 100;
const ah = androidHeight / 100;
const aw = androidWidth / 100;
const PR = PixelRatio.get();

const {StatusBarManager} = NativeModules;
export const sbHeight = StatusBarManager.HEIGHT;

export const nbHeight = sbHeight > 40 ? 30 : 0;

const round = (size: number) => {
  return PixelRatio.roundToNearestPixel(size);
};

export const sizeWidth = (size: number) => {
  return round(
    Platform.OS == 'ios' ? (size / 375) * 100 * iw : (size / 375) * 100 * aw,
  );
};

export const sizeHeight = (size: number) => {
  return round(
    Platform.OS == 'ios'
      ? PR >= 3
        ? (size / 812) * 100 * ih
        : (size / 667) * 100 * ih
      : PR >= 2
      ? (size / 812) * 100 * ah
      : (size / 667) * 100 * ah,
  );
};

export const sizeFont = (size: number) => {
  return round(
    Platform.OS == 'ios'
      ? PR >= 3
        ? (size / 812) * 100 * ih
        : (size / 667) * 100 * ih
      : PR >= 2
      ? (size / 812) * 100 * ah
      : (size / 667) * 100 * ah,
  );
};

export const HALF_WIDTH = sizeWidth(162);
export const UNIQUE_WIDTH = sizeWidth(343);
