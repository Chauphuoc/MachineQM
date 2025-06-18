import React, {useState} from 'react';
import {FlatList, FlatListProps, RefreshControl, View, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import {PADDING_HORIZONTAL} from '../../constants/Constants';
import {sizeHeight} from '../../helpers/resize';
import AppText from './AppText';
import Container from './Container';
import EmptyList from './EmptyList';
import Row from './Row';
import Spacing from './Spacing';
import FooterList from './FooterList';
import EventRegister from '../../helpers/event-register.helper';

interface Props extends FlatListProps<any> {
  onRefresh: () => void;
  itemName?: string;
  itemKey: string;
  onLoadMore?: () => void;
  hideCount?: boolean;
  hideFooter?: boolean;
  hideEmpty?: boolean;
}

const List: React.FC<Props> = props => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Container>
      {!props.hideCount && (
        <View>
          <Spacing height={10} />
          <Row>
            <AppText f14>
              Kết quả{' '}
              <AppText f16 color={Colors.mainColor}>
                {`(${props.data?.length ?? 0})`}
              </AppText>
            </AppText>
          </Row>
          <Spacing height={10} />
        </View>
      )}
      {/* <ScrollView > */}
      <FlatList
        {...props}
        onEndReached={() => {
          if (EventRegister.listeners.apiList.length > 0) {
            return;
          }
          props.onLoadMore && props.onLoadMore();
        }}
        contentContainerStyle={{
          paddingBottom: sizeHeight(20),
        }}
        keyExtractor={(item, index) => `${index}${item?.[props.itemKey]}`}
        refreshing={refreshing}
        ListEmptyComponent={!props.hideEmpty ? <EmptyList /> : null}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={props.onRefresh} />
        }
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={5}
        ListFooterComponent={
          props.data?.length != 0 && !props.hideFooter ? (
            <FooterList title="Không còn kết quả" />
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />
      {/* </ScrollView> */}
    </Container>
  );
};

export default List;
