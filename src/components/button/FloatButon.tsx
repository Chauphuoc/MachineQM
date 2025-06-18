import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import CommonStyles from '../../constants/CommonStyles';
import {FLOAT_BUTTON_SIZE, ROUND_RADIUS} from '../../constants/Constants';
import {Container} from '../common';
import CustomImage from '../common/CustomImage';

interface Props {
  onPress: () => void;
  icon: number;
}

const FloatButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Container
        borderRadius={ROUND_RADIUS}
        backgroundColor={Colors.B500}
        height={FLOAT_BUTTON_SIZE}
        width={FLOAT_BUTTON_SIZE}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={35}
        right={16}>
        <CustomImage source={props.icon} color={Colors.N0} size={26} />
      </Container>
    </TouchableOpacity>
  );
};

export default FloatButton;
