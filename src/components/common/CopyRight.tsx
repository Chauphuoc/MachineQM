import React from 'react';
import {AppText, Column, CustomImage, Row, Spacing} from '.';
import {AppIcon} from '../../assets';
import Colors from '../../constants/Colors';
import {ViewStyle} from 'react-native';

interface Props extends ViewStyle {
  version: string;
  onlyVersion?: boolean;
}

const CopyRight: React.FC<Props> = props => {
  const {version, onlyVersion} = props;
  return (
    <Column alignSelf="center" alignItems="center" {...props}>
      <AppText f14 color={Colors.N400}>
        Phiên bản {version}
      </AppText>

      <Spacing height={8} />

      {!onlyVersion && (
        <Column alignItems="center">
          <Row>
            <AppText f12 color={Colors.N400}>
              Copyright
            </AppText>
            <CustomImage source={AppIcon.setting_copy_right} size={16} />
            <AppText f12 color={Colors.N400}>
              2023-2024 IRTECH
            </AppText>
          </Row>
          <AppText f12 color={Colors.N400}>
            All Rights Reserved
          </AppText>
        </Column>
      )}
    </Column>
  );
};

export default CopyRight;
