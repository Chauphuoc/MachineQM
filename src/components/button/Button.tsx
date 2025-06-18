import React, { ReactNode } from 'react';
import {ViewStyle} from 'react-native';
import Colors from '../../constants/Colors';
import {BORDER_RADIUS, BORDER_WIDTH} from '../../constants/Constants';
import {AppText, Column, CustomImage, Row, Spacing} from '../common';
import {sizeHeight, sizeWidth} from '../../helpers/resize';
interface Props extends ViewStyle {
  onPress?: () => void;
  title: string;
  titleColor?: string;
  outLine?: boolean;
  hide?: boolean;
  affixIcon?: ReactNode
  color?: string
}
const Button: React.FC<Props> = props => {
  const {title, titleColor, outLine, hide, affixIcon, color} = props;
  if (hide) {
    return null;
  }
  return (
    <Row
      height={sizeHeight(42)}
      backgroundColor={outLine ? Colors.N0 : Colors.B900}
      justifyContent="center"
      alignItems="center"
      borderRadius={BORDER_RADIUS}
      borderWidth={outLine ? BORDER_WIDTH : 0}
      borderColor={Colors.N400}
      {...props}>
      {
        affixIcon && (
          <>
          <CustomImage source={affixIcon} size={sizeWidth(25)} color={color ?? Colors.N0}/>
          <Spacing width={sizeWidth(5)}/>
          </>
        )
      }
      <AppText
        color={titleColor ? titleColor : outLine ? Colors.N700 : Colors.N0}
        f16_bold>
        {title}
      </AppText>
    </Row>
  );
};

export default Button;
