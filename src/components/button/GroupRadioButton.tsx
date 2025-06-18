import React from 'react';
import {HALF_WIDTH, sizeHeight} from '../../helpers/resize';
import Radio from '../checkbox/Radio';
import {AppText, Column, Row, Spacing} from '../common';
import Colors from '../../constants/Colors';

interface Props {
  title: string;
  data: string[];
  selectedValue: number;
  onSelect: (index: number) => void;
  disabled?: boolean;
}

const GroupRadioButton: React.FC<Props> = ({
  title,
  data,
  onSelect,
  selectedValue,
  disabled,
}) => {
  return (
    <Column>
      <AppText f14_bold>{title}</AppText>
      <Row flexWrap="wrap">
        {data.map((item, index) => (
          <Row
            width={HALF_WIDTH}
            key={index + item}
            marginTop={sizeHeight(14)}
            onPress={() => {
              if (disabled) return;
              onSelect(index);
            }}>
            <Radio
              value={index}
              selectedValue={selectedValue}
              color={disabled ? Colors.N500 : undefined}
            />
            <Spacing width={10} />
            <AppText f16>{item}</AppText>
          </Row>
        ))}
      </Row>
    </Column>
  );
};

export default GroupRadioButton;
