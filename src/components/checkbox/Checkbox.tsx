import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {AppIcon} from '../../assets';
import Colors from '../../constants/Colors';
import {sizeHeight} from '../../helpers/resize';
import CustomImage from '../common/CustomImage';

interface Props extends ViewStyle {
  value: any;
  selectedValue: any;
  size?: number;
}

const CheckBox: React.FC<Props> = props => {
  const {value, selectedValue, size = 24} = props;
  return (
    <View
      style={[
        {height: sizeHeight(size), width: sizeHeight(size)},
        styles.checkbox,
        value == selectedValue && styles.checkboxActive,
        props,
      ]}>
      <CustomImage
        source={AppIcon.tick}
        color={Colors.N0}
        size={size - 3}
        resizeMode="contain"
      />
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    borderRadius: sizeHeight(4),
    borderColor: Colors.N400,
    borderWidth: sizeHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: Colors.mainColor,
    borderColor: Colors.mainColor,
  },
});
