import React, {useState, ReactNode} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { AppIcon } from '../../../assets';
import Colors from '../../../constants/Colors';
import CommonStyles from '../../../constants/CommonStyles';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  INPUT_HEIGHT,
  INPUT_PADDING_HORIZONTAL,
} from '../../../constants/Constants'
import {HALF_WIDTH, sizeHeight, sizeWidth} from '../../helpers/resize';
import {AppText, Column, CustomImage, Row, Spacing} from '../common';
import {StringNumberFormat} from '../../helpers/number/number-format';

interface Props extends TextInputProps {
  title?: string;
  required?: boolean;
  disabled?: boolean;
  security?: boolean;
  half?: boolean;
  containerStyle?: ViewStyle;
  inputType?: 'text' | 'number';
  suffixIcon?: ReactNode;
}

const Input: React.FC<Props> = props => {
  const [visible, setVisible] = useState(props.security ? false : true);
  const {
    style,
    value,
    title,
    required,
    disabled,
    half,
    containerStyle,
    inputType = 'text',
    suffixIcon,
  } = props;
  const onClear = () => {
    props.onChangeText && props.onChangeText('');
  };
  const [focus, setFocus] = useState(false);
  return (
    <Column width={half ? HALF_WIDTH : undefined} {...containerStyle}>
      {
        title && (
          <AppText f14_bold>
            {required && <AppText color={Colors.R500}>{`* `}</AppText>}
            {title}
          </AppText>
        )
      }
      <Spacing height={5} />
      <Row
        {...styles.container}
        minHeight={INPUT_HEIGHT}
        borderColor={Colors.N200}
        backgroundColor={ Colors.N0}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={[styles.input, props.multiline && styles.multiline, style]}
          secureTextEntry={!visible}
          placeholderTextColor={Colors.N500}
          autoCapitalize="none"
          placeholder={disabled ? '' : 'Nhập thông tin'}
          {...props}
          onChangeText={
            inputType == 'text'
              ? props.onChangeText
              : text => {
                  props.onChangeText &&
                    props.onChangeText(StringNumberFormat(text));
                }
          }
          editable={!disabled}
        />

        {
          props.value == '' && suffixIcon
        }

        {!!props.value && !disabled && focus && (
          <TouchableOpacity onPress={onClear}>
            <CustomImage
              source={AppIcon.x}
              color={Colors.N500}
              size={sizeWidth(20)}
            />
          </TouchableOpacity>
        )}

        {!!props.value && props.security && focus && (
          <Spacing
            height={'50%'}
            width={1}
            bg={Colors.N300}
            marginHorizontal={8}
          />
        )}

        {props.security && (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <CustomImage
              source={!visible ? AppIcon.invisible : AppIcon.visible}
              color={Colors.mainColor}
              size={sizeWidth(20)}
            />
          </TouchableOpacity>
        )}
      </Row>
    </Column>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
  },
  input: {
    ...CommonStyles.f16_20,
    flex: 1,
    padding: 0,
    height: '100%',
  },
  multiline: {
    textAlignVertical: 'top',
    paddingTop: sizeHeight(8),
    paddingBottom: sizeHeight(8),
  },
});

export default Input;
