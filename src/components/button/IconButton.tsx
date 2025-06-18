import React from 'react';
import {ViewStyle} from 'react-native';
import Colors from '../../constants/Colors';
import {BORDER_RADIUS} from '../../constants/Constants';
import {sizeHeight} from '../../helpers/resize';
import {AppText, Row} from '../common';
import CustomImage from '../common/CustomImage';

interface Props extends ViewStyle {
  icon: number;
  title?: string;
  onPress: () => void;
  iconColor?: string;
}

const IconButton: React.FC<Props> = props => {
  return (
    <Row
      justifyContent="center"
      height={sizeHeight(42)}
      width={sizeHeight(42)}
      backgroundColor={Colors.mainColor}
      borderRadius={BORDER_RADIUS}
      {...props}>
      <CustomImage source={props.icon} color={props.iconColor ?? Colors.N0} />
      <AppText f14_bold>{props.title}</AppText>
    </Row>
  );
};

export default IconButton;
