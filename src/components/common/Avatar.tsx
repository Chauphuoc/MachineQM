// import React, {useState} from 'react';
// import {ViewStyle} from 'react-native';
// import {AppImage} from '../../assets';
// import {useAppDispatch, useAppSelector} from '../../config-store';
// import {BORDER_WIDTH, ROUND_RADIUS} from '../../constants/Constants';
// import Column from './Column';
// import CustomImage from './CustomImage';
// // import {FilePickerModal} from '../modal';
// // import AuthApi from '../../feature/auth/api/AuthApi';
// // import {FileAsset, ImageAsset} from '../../interface/Interface';
// import ValidationResponse from '../../helpers/validation-response';
// // import {actionSetUser} from '../../feature/auth/middleware/auth-reducer';
// import Colors from '../../constants/Colors';
// interface Props extends ViewStyle {
//   size?: number;
// }
// const Avatar: React.FC<Props> = props => {
//   const dispatch = useAppDispatch();
//   const [visible, setVisible] = useState(false);
//   const {size = 48} = props;
//   // const {user} = useAppSelector(state => state.AuthReducer);
//   const onSave = async (data: {
//     type: number;
//     // imageValue?: ImageAsset[] | undefined;
//     // fileValue?: FileAsset | undefined;
//   }) => {
//     if (data.imageValue && data.imageValue.length > 0) {
//       let res = await AuthApi.UpdateAvatar(data.imageValue[0]);
//       ValidationResponse(res, () => {
//         dispatch(actionSetUser({...user, avatar: res?.data?.imgUrl ?? ''}));
//       });
//     }
//   };
//   return (
//     <Column
//       borderWidth={BORDER_WIDTH}
//       borderColor={Colors.N200}
//       borderRadius={ROUND_RADIUS}
//       overflow="hidden"
//       {...props}
//       onPress={() => setVisible(true)}>
//       <CustomImage
//         source={user.avatar ? {uri: user.avatar} : AppImage.avatar}
//         size={size}
//         resizeMode="cover"
//       />
//       <FilePickerModal
//         visible={visible}
//         onClosed={() => setVisible(false)}
//         pickerType="Image"
//         onSave={onSave}
//         limit={1}
//       />
//     </Column>
//   );
// };

// export default Avatar;
