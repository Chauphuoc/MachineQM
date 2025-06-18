import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {NewObject} from '../../helpers/object-helper';

interface Props extends ViewStyle {
  children?: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
}

const Row: React.FC<Props> = props => {
  let newProps = NewObject(props, ['children']);
  if (props.onPress || props.onLongPress) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        style={[styles.container, {...newProps}]}>
        {props.children}
      </TouchableOpacity>
    );
  }
  return (
    <View style={[styles.container, {...newProps}]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Row;
