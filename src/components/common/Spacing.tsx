import React from 'react';
import {View, ViewStyle} from 'react-native';
import {sizeHeight, sizeWidth} from '../../helpers/resize';

interface Props extends ViewStyle {
  bg?: string;
}

const Spacing: React.FC<Props> = props => {
  const {height = 0, width = 0, bg} = props;
  return (
    <View
      style={[
        props,
        {
          height: typeof height === 'number' ? sizeHeight(height) : height,
          width: typeof width === 'number' ? sizeWidth(width) : width,
          backgroundColor: bg ? bg : 'transparent',
        },
      ]}></View>
  );
};

export default Spacing;
