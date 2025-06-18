import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import CommonStyles from '../../constants/CommonStyles';
import {NewObject} from '../../helpers/object-helper';

interface Props extends TextStyle {
  f8?: boolean;
  f10?: boolean;
  f10_bold?: boolean;
  f12?: boolean;
  f12_bold?: boolean;
  f14?: boolean;
  f14_bold?: boolean;
  f16?: boolean;
  f16_bold?: boolean;
  f18?: boolean;
  f18_bold?: boolean;
  color?: string;
  numberOfLines?: number;
  children?: ReactNode;
}

const AppText: React.FC<Props> = props => {
  const {
    f8,
    f10,
    f10_bold,
    f12,
    f12_bold,
    f14,
    f14_bold,
    f16,
    f16_bold,
    f18,
    f18_bold,
    color,
    numberOfLines,
  } = props;
  let newProps = NewObject(props, [
    'f8',
    'f10',
    'f10_bold',
    'f12',
    'f12_bold',
    'f14',
    'f14_bold',
    'f16',
    'f16_bold',
    'f18',
    'f18_bold',
    'numberOfLines',
    'children',
    'ellipsizeMode',
  ]);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        CommonStyles.f16_20,
        f8 ? CommonStyles.f10_12 : null,
        f10 ? CommonStyles.f10_12 : null,
        f10_bold ? CommonStyles.f10_12_bold : null,
        f12 ? CommonStyles.f12_14 : null,
        f12_bold ? CommonStyles.f12_14_bold : null,
        f14 ? CommonStyles.f14_h17 : null,
        f14_bold ? CommonStyles.f14_h17_bold : null,
        f16 ? CommonStyles.f16_20 : null,
        f16_bold ? CommonStyles.f16_20_bold : null,
        f18 ? CommonStyles.f18_22 : null,
        f18_bold ? CommonStyles.f18_22_bold : null,
        color ? {color} : null,
        newProps,
      ]}>
      {props.children}
    </Text>
  );
};

export default AppText;
