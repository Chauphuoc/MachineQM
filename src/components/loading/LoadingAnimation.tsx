import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import Colors from '../../constants/Colors';
import {sizeHeight, sizeWidth} from '../../helpers/resize';

interface CircularProgressProps {}

const LoadingAnimation: React.FC<CircularProgressProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.spinner}>
        <MaterialIndicator color={Colors.N0} size={sizeHeight(40)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    height: '100%',
    width: '100%',
    top: -sizeHeight(39),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.modalBg,
    borderRadius: sizeHeight(6),
    height: sizeHeight(75),
    width: sizeHeight(75),
  },
});

export default LoadingAnimation;
