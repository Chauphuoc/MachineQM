import notifee, {AndroidImportance} from '@notifee/react-native';
import {getNotifyId} from '../../stores';

export const onDisplayNotification = async (data: {
  title: string;
  body: string;
  path: string;
}) => {
  console.log({data});
  let channelId = (await getNotifyId()) ?? undefined;
  // Request permissions (required for iOS)
  await notifee.requestPermission();
  // Display a notification
  await notifee.displayNotification({
    title: data.title,
    body: data.body,
    data: {component: data.path},
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // smallIcon: 'drawable/ic_launcher.png',
      importance: AndroidImportance.HIGH,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
};
