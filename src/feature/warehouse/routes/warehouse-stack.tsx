import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WarehouseHome from "../screens/bottom-tab/WarehouseHome";
// import Orders from "../screens/orders/Orders";
// import Order from "../screens/orders/Order";
// import { ItemDetail } from "../screens/orders/ItemDetail";
// import { DetailWE, OrderDatum, WarehouseOrderType, DetailWI, DetailWET, DetailWIT } from './../interface';


const Stack = createNativeStackNavigator()

export const enum WHR {
    HOME = 'WarehouseHome',
    // ORDERS = 'Orders',
    // ORDER = 'Order', 
    // ITEM_DETAIL = 'ItemDetail'
}

export type ScreenParams = {
    // [WHR.ORDERS]: {title: string; menu_id: string};
  
    // [WHR.ORDER]: {
    //     title: string; 
    //     from: 'create' | 'edit',
    //     data: any,
    //     orderType: WarehouseOrderType
    // };
  
    // [WHR.ITEM_DETAIL]: {
    //   onSave: (item: DetailWE | DetailWI | DetailWET | DetailWIT) => void;
    //   details: DetailWE[] | DetailWI[] | DetailWET[] | DetailWIT[];
    //   detail: any,
    //   from: 'create' | 'edit';
    //   orderType: WarehouseOrderType,
    //   dataProps: any
    // };
  
    // [WI.WI_EXTRACT]: EditParams;
};

const WarehouseStack = () => {
    return (
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name={WHR.HOME} component={WarehouseHome as any}/>
            {/* <Stack.Screen name={WHR.ORDERS} component={Orders as any}/>
            <Stack.Screen name={WHR.ORDER} component={Order as any}/>
            <Stack.Screen name={WHR.ITEM_DETAIL} component={ItemDetail as any}/> */}
        </Stack.Group>
    )
}

export default WarehouseStack