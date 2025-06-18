import {AppDispatch, RootState} from '../../../config-store';
import {reset} from '../../../helpers/navigation';
import ValidationResponse from '../../../helpers/validation-response';
// import {kcsMain} from '../../../routes/main-tab'; 
import {setExpireTime, setToken, setUserId} from '../../../stores';
import AuthApi from '../api/AuthApi';
import {LoginParam} from '../interface';
import { getExpireTime } from '../../../stores';

const thunkLogin = (data: LoginParam) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    let res = await AuthApi.Login(data);
    if(res && (res.code == 500 || res.msg == 'Sai tài khoản hoặc mật khẩu')){
      return res
    }
    ValidationResponse(res, async () => {
      let expireTime = parseInt(res.data?.expireTime)
      let currentDate = new Date()
      let expireDate = new Date(currentDate.getTime() + expireTime)
      await setExpireTime(expireDate)
      await setToken(res.data?.token);
    //   set lại thông tin user ở reducer
    //   dispatch(actionSetUserInfo(res.data?.userInfo));
    //   dispatch(actionSetToken(res.data.token ?? ''));
    //   dispatch(actionSetUserRole(res.data?.userRole))
    //   dispatch(actionSetExpireTime(expireDate))
    //   chuyển trang
    //   reset(kcsMain.KcsStack);
    });
  };
};

const checkExpireTime = async () => {
  let expireTime = await getExpireTime()
  let expireDate = new Date(expireTime ?? new Date())
  let currentDate = new Date()
  if(expireTime != ''){
      return currentDate > expireDate
  }
  return false
}

export {thunkLogin, checkExpireTime};
