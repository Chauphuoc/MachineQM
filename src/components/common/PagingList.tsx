import React, {useEffect, useState} from 'react';
import {FlatList, FlatListProps, RefreshControl, View} from 'react-native';
import Colors from '../../constants/Colors';
import {PADDING_HORIZONTAL, PAGE_SIZE} from '../../constants/Constants';
import EventRegister from '../../helpers/event-register.helper';
import {sizeHeight} from '../../helpers/resize';
import {ObjectInterface} from '../../interface/Interface';
import AppText from './AppText';
import Container from './Container';
import EmptyList from './EmptyList';
import FooterList from './FooterList';
import Row from './Row';
import Spacing from './Spacing';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends FlatListProps<any> {
  itemName?: string;
  itemKey: string;
  hideCount?: boolean;
  hideFooter?: boolean;
  query?: ObjectInterface;
  getData: (page: number) => void;
  data: any[];
  total?: number;
  feedbackRefresh?: (isRefresh:boolean) => void
}

const PagingList: React.FC<Props> = props => {
  const {getData, data, query, total, feedbackRefresh} = props;
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const onRefresh = () => {
    feedbackRefresh && feedbackRefresh(true)
    getData(0);
    setPage(0);
  };

  const onLoadMore = () => {
    if (page * PAGE_SIZE > data.length) {
      return;
    }
    getData(page + 1);
    setPage(page + 1);
  };

  useEffect(() => {
    onRefresh();
  }, [query]);

  return (
    <Container>
      {!props.hideCount && (
        <View>
          <Spacing height={10} />
          <Row paddingHorizontal={PADDING_HORIZONTAL}>
            <AppText f14>
              Kết quả{' '}
              <AppText f16 color={Colors.mainColor}>
                {`(${total ?? props.data?.length ?? 0})`}
              </AppText>
            </AppText>
          </Row>
          <Spacing height={10} />
        </View>
      )}
      <FlatList
        {...props}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={5}
        onEndReached={() => {
          if (EventRegister.listeners.apiList.length > 0) {
            return;
          }
          onLoadMore();
        }}
        contentContainerStyle={{
          paddingBottom: sizeHeight(150),
        }}
        keyExtractor={(item, index) => `${index}${item[props.itemKey]}`}
        refreshing={refreshing}
        ListEmptyComponent={<EmptyList />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={
          props.data?.length != 0 && !props.hideFooter ? (
            <FooterList title="Không còn kết quả" />
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default PagingList;
