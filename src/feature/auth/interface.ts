//REDUCER
export type AuthInitialState = {
  username: string,
  password: string
};

export interface LoginParam {
  username: string;
  password: string;
  deviceID: string;
  deviceName: string;
  deviceType: string;
  fireBaseToken: string
}
