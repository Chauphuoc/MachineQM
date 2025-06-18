import { BodyView, Container, Row, Column, CustomImage, List, AppText, Spacing } from '../../../../components/common';
import Colors from '../../../../constants/Colors';
// import HomeHeader from './../../../kcs/components/home/HomeHeader'
import { useEffect, useState } from 'react';
import { sizeHeight, sizeWidth } from '../../../../helpers/resize';

const WarehouseHome = () => {

    useEffect(()=> {
    }, [])

    return (
        <Container backgroundColor={Colors.N0}>
            {/* <HomeHeader onPress={() => {}} hideNotification/> */}
            <BodyView paddingTop={sizeHeight(5)}>
              <AppText>Trang chủ kho</AppText>
              {/* <List
                hideEmpty
                hideFooter
                hideCount
                onRefresh={() => {}}
                itemKey='value'
                data={WarehouseOrders}
                renderItem={({item, index}) => (
                  renderItem(item)
                )}
              /> */}
            </BodyView>
        </Container>
    );
}

export default WarehouseHome;