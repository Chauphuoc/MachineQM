import {event} from '../constants/Event';
import { auth } from '../feature/auth/routes/auth-stack';
import {ResponseInterface} from '../interface/Interface';
import EventRegister from './event-register.helper';
import { navigate, reset } from './navigation';
import ShowCustomToast from './notify/show-custom-toast';

const ValidationResponse = (
  res: ResponseInterface,
  func: () => void,
  cancelFunc?: (err?: string) => void,
) => {
  if (res && (res.code == 200 || res.code == 0)) {
    return func();
  }
  if (res && (res.code == 500 && res.msg == 'Mật khẩu cũ không đúng')) {
    return func();
  }
  if (res && (res.code == 500 && res.msg == 'Error retrieving PDF data')) {
    return func();
  }
  if (res && (res.code == 500 && res.msg == 'Mức vừa nhập không nằm trong tiêu chuẩn cho phép')) {
    return func();
  }
  if (res && (res.code == 500 && res.msg == 'Tài khoản đã hết phiên đăng nhập.')) {
    ShowCustomToast(res.msg ?? 'Lỗi hệ thống', 'warning');
    navigate(auth.Login)
    return
  }
  if (cancelFunc) {
    cancelFunc(res.msg || res.message);
  }
  if (res.code == 401 || res.code == 403) {
    EventRegister.emit(event.forceLogout);
    return;
  }
  return ShowCustomToast(res.msg ?? 'Lỗi hệ thống', 'warning');
};

export default ValidationResponse;
