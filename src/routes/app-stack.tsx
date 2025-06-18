import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabs, {warehouseMain} from './main-tab';
import {navigationRef} from '../helpers/navigation';
import AlertScreen from '../components/common/Alert';
// import AuthStack from '../feature/auth/routes/auth-stack';
import WarehouseStack from '../feature/warehouse/routes/warehouse-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          orientation: 'portrait'
        }}>
        {/* App system */}
        {WarehouseStack()}
        <Stack.Screen name={warehouseMain.WarehouseStack} component={MainTabs} />
        {/* Modal Screen */}
        <Stack.Screen
          name={'ALERT'}
          component={AlertScreen}
          options={{
            presentation: 'transparentModal',
            animation: 'fade_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
