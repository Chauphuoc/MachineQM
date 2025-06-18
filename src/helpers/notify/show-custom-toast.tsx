import Toast from 'react-native-toast-message';

const ShowCustomToast = (
  title: string,
  status?: 'warning' | 'success',
  duration?: number,
) => {
  Toast.show({
    type: status ?? 'warning',
    autoHide: true,
    position: 'top',
    visibilityTime: duration ?? 10000,
    text1: title,
  });
};

export default ShowCustomToast;
