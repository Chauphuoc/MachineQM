import React, {ReactNode, useState} from 'react';
import {
  Keyboard,
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import Colors from '../../constants/Colors';
import {sizeHeight} from '../../helpers/resize';
import Column from './Column';
import Container from './Container';

interface Props extends ViewStyle {
  scroll?: boolean;
  onBodyPress?: () => void;
  onRefresh?: () => void;
  children?: ReactNode;
  white?: boolean;
}

const BodyView: React.FC<Props> = props => {
  const [refreshing, setRefreshing] = useState(false);
  const {scroll, white} = props;
  if (scroll) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          if (props.onBodyPress) {
            props.onBodyPress();
          }
        }}>
        <Container backgroundColor={white ? Colors.N0 : Colors.N100}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={props.onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled
            contentContainerStyle={[{paddingBottom: sizeHeight(100)}]}>
            <Column
              disableOpacity
              paddingTop={24}
              onPress={() => Keyboard.dismiss()}
              {...props}>
              {props.children}
            </Column>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (props.onBodyPress) {
          props.onBodyPress();
        }
      }}>
      <Container
        onPress={() => {
          Keyboard.dismiss();
        }}
        disableOpacity
        backgroundColor={white ? Colors.N0 : Colors.N100}
        paddingTop={12}
        {...props}>
        {props.children}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default BodyView;
