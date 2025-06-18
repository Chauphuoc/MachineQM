import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {sizeHeight, sizeWidth} from '../../helpers/resize';
import Button from '../button/Button';
import Column from './Column';
import Row from './Row';
import Spacing from './Spacing';

interface Props {
  cancelLabel?: string;
  acceptLabel?: string;
  onCancel?: () => void;
  onAccept: () => void;
  children?: React.ReactNode;
}

const BottomView: React.FC<Props> = props => {
  const {onCancel, onAccept, acceptLabel, cancelLabel} = props;
  if (onCancel) {
    return (
      <Column {...styles.container}>
        {props.children}
        <Row>
          <Button
            outLine
            title={cancelLabel ?? 'Hủy'}
            onPress={props.onCancel}
            flex={1}
          />
          <Spacing width={12} />
          <Button
            title={acceptLabel ?? 'Xác nhận'}
            onPress={onAccept}
            flex={1}
          />
        </Row>
      </Column>
    );
  }
  return (
    <Column {...styles.container}>
      {props.children}
      <Row justifyContent="space-between">
        <Button
          title={props.acceptLabel ?? 'Xác nhận'}
          onPress={onAccept}
          flex={1}
        />
      </Row>
    </Column>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: sizeHeight(10),
    paddingBottom: sizeHeight(36),
    backgroundColor: Colors.N0,
    borderTopWidth: sizeHeight(2),
    borderColor: Colors.N100,
    paddingHorizontal: sizeWidth(16),
  },
});

export default BottomView;
