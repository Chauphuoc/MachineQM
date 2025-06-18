import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './bottom-tab';
import WarehouseHome from '../feature/warehouse/screens/bottom-tab/WarehouseHome';
// import Profile from '../feature/kcs/screens/bottomTabs/Profile';


export const warehouseMain = {
  WarehouseStack: 'WarehouseStack',
  WarehouseHome: ' WarehouseHome',
  Profile: 'WarehouseHomeProfile',
}

const Tab = createBottomTabNavigator();

function MainTabs() {

    return (
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{headerShown: false}}>
          <Tab.Screen name={warehouseMain.WarehouseHome} component={WarehouseHome as any} />
          {/* <Tab.Screen name={warehouseMain.Profile} component={Profile as any} /> */}
      </Tab.Navigator>
    )
}

export default MainTabs;
