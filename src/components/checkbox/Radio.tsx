import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/Colors';
import {ROUND_RADIUS} from '../../constants/Constants';
import {sizeWidth} from '../../helpers/resize';

interface Props {
  value: any;
  selectedValue: any;
  size?: number;
  color?: string;
}

const Radio: React.FC<Props> = props => {
  var {value, selectedValue, size = 24, color} = props;
  return (
    <View
      style={[
        styles.checkbox,
        {
          height: sizeWidth(size),
          width: sizeWidth(size),
        },
        value == selectedValue && {borderColor: color ?? Colors.mainColor},
      ]}>
      <View
        style={[
          styles.icon,
          {
            height: sizeWidth(size - 10),
            width: sizeWidth(size - 10),
          },
          value == selectedValue && {
            backgroundColor: color ?? Colors.mainColor,
          },
        ]}
      />
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  checkbox: {
    borderRadius: ROUND_RADIUS,
    borderColor: Colors.N200,
    borderWidth: sizeWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    borderRadius: ROUND_RADIUS,
    backgroundColor: Colors.N0,
  },
});
