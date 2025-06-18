import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = 'TOKEN';
const EXPIRE_TIME = 'EXPIRE_TIME'
const NOTIFY_ID = 'NOTIFY_ID';
export const setToken = (id: string | number) => {
  AsyncStorage.setItem(TOKEN, id.toString());
};

export const getToken = () => {
  return AsyncStorage.getItem(TOKEN);
};

export const deleteToken = () => {
  return AsyncStorage.removeItem(TOKEN);
};

export const setExpireTime = (date: Date) => {
  AsyncStorage.setItem(EXPIRE_TIME, date.toISOString());
}

export const getExpireTime = () => {
  return AsyncStorage.getItem(EXPIRE_TIME);
}

export const deleteExpireTime = () => {
  return AsyncStorage.removeItem(EXPIRE_TIME);
}
export const getNotifyId = () => {
  return AsyncStorage.getItem(NOTIFY_ID);
};

