import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from '../../constants/Colors';
import EventRegister from '../../helpers/event-register.helper';
import {sizeHeight, sizeWidth} from '../../helpers/resize';
import AppText from './AppText';

interface Props {
  title: string;
  hide?: boolean;
}

const FooterList: React.FC<Props> = props => {
  const {title, hide} = props;
  if (hide) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <AppText f14 color={Colors.N500}>
        {title}
      </AppText>
      <View style={styles.right} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizeWidth(12),
    marginTop: 18,
  },
  left: {
    flex: 1,
    marginRight: sizeWidth(12),
    height: sizeHeight(1),
    backgroundColor: Colors.N100,
  },
  right: {
    flex: 1,
    marginLeft: sizeWidth(12),
    height: sizeHeight(1),
    backgroundColor: Colors.N100,
  },
});

export default FooterList;
