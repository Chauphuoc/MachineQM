import React from 'react';
import {AppIcon, AppImage} from '../../assets';
import Colors from '../../constants/Colors';
import {AppText, Container, Spacing} from '../common';
import CustomImage from './CustomImage';
import { ViewStyle } from 'react-native';

interface Props{
  spacing?: boolean
  style?:ViewStyle
}

const EmptyList: React.FC<Props> = props => {
  return (
    <Container alignItems="center" {...props.style}>
      {!props.spacing && <Spacing height={50} />}
      <CustomImage source={AppIcon.contract_emty} size={50} />
      <Spacing height={14} />
      <AppText f14 color={Colors.N400}>
        Không có kết quả tìm kiếm phù hợp.
      </AppText>
    </Container>
  );
};

export default EmptyList;
