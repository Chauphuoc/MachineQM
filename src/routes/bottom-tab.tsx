import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {AppIcon} from '../assets';
import {AppText,Column,Container,CustomImage} from '../components/common';
import Colors from '../constants/Colors';
import {sizeHeight, sizeWidth} from '../helpers/resize';
import {useAppSelector, useAppDispatch} from '../config-store';
import LinearGradient from 'react-native-linear-gradient';
import { BORDER_RADIUS } from '../constants/Constants';

interface Route {
  name: string;
  key: string;
  param?: object;
}

const MyTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
//   const authReducer = useAppSelector(state => state.AuthReducer);
//   const kcsReducer = useAppSelector(state => state.KcsReducer);
  const dispatch = useAppDispatch()
  //DEFAUL DATA
//   const kcsRoutes = [
//     {
//       normal: AppIcon.home_light,
//       focus: AppIcon.home_bold,
//       lable: 'Trang chủ',
//     },
//     {
//       normal: AppIcon.kcs_light,
//       focus: AppIcon.kcs_bold,
//       lable: 'Điều vận',
//     },
//     {
//       normal: AppIcon.profile_light,
//       focus: AppIcon.profile_bold,
//       lable: 'Cá nhân',
//     },
//   ];

//   const bodRoutes = [
//     {
//       normal: AppIcon.home_light,
//       focus: AppIcon.home_bold,
//       lable: 'Trang chủ',
//     },
//     {
//       normal: AppIcon.product_light,
//       focus: AppIcon.product_bold,
//       lable: 'Sản phẩm',
//     },
//     {
//       normal: AppIcon.report_light,
//       focus: AppIcon.report_bold,
//       lable: 'Báo cáo',
//     },
//     {
//       normal: AppIcon.profile_light,
//       focus: AppIcon.profile_bold,
//       lable: 'Cá nhân',
//     }
//   ];

  const warehouseRoutes = [
    {
      normal: AppIcon.home_light,
      focus: AppIcon.home_bold,
      lable: 'Trang chủ',
    },
    // {
    //   normal: AppIcon.product_light,
    //   focus: AppIcon.product_bold,
    //   lable: 'Chức năng',
    // },
    {
      normal: AppIcon.profile_light,
      focus: AppIcon.profile_bold,
      lable: 'Cá nhân',
    }
  ]

  let item:any[] = warehouseRoutes;

  return (
    <View style={styles.container}>
      {state.routes.map((route: Route, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Container
            key={index.toString()}
            justifyContent="flex-start"
            alignItems="center"
            onPress={onPress}>
            <LinearGradient 
              colors={isFocused ? [Colors.B200, Colors.N0] : [Colors.N0, Colors.N0]}
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: sizeHeight(10),
                paddingHorizontal: sizeHeight(4)
              }}
            >
              {
                isFocused && (
                  <LinearGradient 
                    colors={[Colors.B700, Colors.B400]} 
                    start={{ x: 0 ,y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      height: sizeWidth(5),
                      width: sizeWidth(20),
                      position: 'absolute',
                      top: -3,
                      borderRadius: BORDER_RADIUS*2
                    }}
                  />
                )
              }
              <CustomImage
                source={isFocused ? item[index].focus : item[index].normal} size={sizeWidth(30)}
              />
              <AppText f14 color={isFocused ? Colors.B700 : Colors.N400} marginTop={10}>
                {item[index].lable}
              </AppText>
            </LinearGradient>
          </Container>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizeHeight(75),
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: sizeHeight(5),
    borderTopWidth: sizeHeight(2),
    borderColor: Colors.N100,
  },
  active: {
    backgroundColor: 'rgba(20, 55, 155, 0.2)',
    marginHorizontal: sizeWidth(4),
  }
});

export default MyTabBar;
