import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Colors from '../../constants/Colors';
import {PADDING_HORIZONTAL} from '../../constants/Constants';
import {goBack, navigate} from '../../helpers';
import {sizeWidth} from '../../helpers/resize';
import Button from '../button/Button';
import AppText from './AppText';
import Row from './Row';
import Spacing from './Spacing';

interface IProps {
  route?: any;
}

const AlertScreen: React.FC<IProps> = props => {
  const {title, text, onConfirm, onCancel} = props.route.params;
  return (
    <TouchableWithoutFeedback onPress={goBack}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => null}>
          <View style={styles.body}>
            <Spacing height={20} />

            <AppText f18_bold alignSelf="center">
              {title}
            </AppText>

            <Spacing height={10} />

            <AppText
              f16
              textAlign="center"
              paddingHorizontal={PADDING_HORIZONTAL}
              color={Colors.N600}>
              {text}
            </AppText>

            <Spacing height={32} />

            <Row width={'100%'} justifyContent="space-between">
              <Button
                title="Đóng"
                onPress={() => {
                  goBack();
                  !!onCancel && onCancel();
                }}
                flex={1}
                outLine
              />

              {onConfirm && (
                <Button
                  title="Xác nhận"
                  onPress={() => {
                    goBack();
                    !!onConfirm && onConfirm();
                  }}
                  flex={1}
                  marginLeft={10}
                  backgroundColor={Colors.B900}
                />
              )}
            </Row>

            <Spacing height={16} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.modalBg,
  },
  body: {
    backgroundColor: Colors.N0,
    borderRadius: sizeWidth(6),
    width: sizeWidth(343),
    paddingHorizontal: PADDING_HORIZONTAL,
  },
});

export default AlertScreen;

export function Alert(
  title: string = 'Thông báo',
  text: string,
  onConfirm?: () => void,
  onCancel?: () => void,
) {
  navigate('ALERT', {title, text, onConfirm, onCancel});
}
