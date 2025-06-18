import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {BORDER_WIDTH} from '../../constants/Constants';
import {TabViewConfig} from '../../interface/Interface';
import AppText from './AppText';
import Column from './Column';
import Container from './Container';
import Row from './Row';
interface Props {
  data: TabViewConfig[];
  onChangeTab?: (tab: number) => void;
}
const TabView: React.FC<Props> = ({data, onChangeTab}) => {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <Container>
      <Row>
        {data.map((i, index) => {
          let isSelect = index == selectIndex;
          return (
            <Container
              key={index + i.title}
              onPress={() => {
                setSelectIndex(index);
                onChangeTab && onChangeTab(index);
              }}
              justifyContent="center"
              alignItems="center"
              paddingVertical={12}
              backgroundColor={isSelect ? Colors.B50 : Colors.N0}
              borderBottomWidth={BORDER_WIDTH}
              borderColor={Colors.N100}>
              <AppText f16 color={isSelect ? Colors.N700 : Colors.N800}>
                {i.title}
              </AppText>
              {isSelect && (
                <Column
                  height={5}
                  position="absolute"
                  width={'100%'}
                  backgroundColor={Colors.B500}
                  bottom={-BORDER_WIDTH}
                />
              )}
            </Container>
          );
        })}
      </Row>
      <Container>{data?.[selectIndex]?.content()}</Container>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default TabView;
