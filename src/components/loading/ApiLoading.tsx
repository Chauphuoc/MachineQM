// import React, {Component} from 'react';
// import {Animated, StyleSheet} from 'react-native';
// import {connect} from 'react-redux';
// import {RootState} from '../../config-store';
// // import {event} from '../../constants/Event';
// // import EventRegister from '../../helpers/event-register.helper';
// import {deleteToken} from '../../stores';
// import {reset} from '../../helpers/navigation';
// // import {auth} from '../../feature/auth/routes/auth-stack';
// import {ShowCustomToast} from '../../helpers';
// import LoadingAnimation from './LoadingAnimation';
// import {GlobalInterface} from '../../interface/Interface';
// // import {actionSetToken} from '../../feature/auth/middleware/auth-reducer';
// // import AuthApi from '../../feature/auth/api/AuthApi';
// import ValidationResponse from '../../helpers/validation-response';

// interface IProps extends GlobalInterface {}

// interface IState {
//   loading: boolean;
//   opacity: Animated.Value;
// }

// class ApiLoading extends Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       loading: false,
//       opacity: new Animated.Value(0),
//     };
//   }

//   showLoading: any;
//   hideLoading: any;
//   timeout: any;

//   componentDidMount() {
//     this.showLoading = EventRegister.on(event.showLoading, this.onShowLoading);
//     this.hideLoading = EventRegister.on(event.hideLoading, this.onHideLoading);
//     this.showLoading = EventRegister.on(event.forceLogout, this.forceLogout);
//   }

//   forceLogout = async () => {
//     let res = await AuthApi.Logout();
//     ValidationResponse(res, async () => {
//       await deleteToken();
//       this.props.dispatch(actionSetToken(''));
//       ShowCustomToast(
//         'Đã xảy ra lỗi hoặc phiên làm việc của bạn đã hết hạn, vui lòng login lại!',
//       );
//       reset(auth.Login);
//     });
//   };

//   componentWillUnmount() {
//     EventRegister.removeAllListeners();
//   }

//   onClearTimeout = () => {
//     if (this.timeout) {
//       clearTimeout(this.timeout);
//     }
//   };
//   onShowLoading = async () => {
//     this.onClearTimeout();
//     this.setState({loading: true});
//     Animated.timing(this.state.opacity, {
//       useNativeDriver: true,
//       toValue: 1,
//       duration: 100,
//     }).start();
//   };
//   onHideLoading = async () => {
//     this.onClearTimeout();
//     if (EventRegister.listeners.apiList.length > 0) {
//       return;
//     }

//     await Animated.timing(this.state.opacity, {
//       useNativeDriver: true,
//       toValue: 0,
//       duration: 200,
//     }).start();
//     this.timeout = setTimeout(() => {
//       this.setState({loading: false});
//     }, 200);
//   };

//   render() {
//     if (!this.state.loading) {
//       return null;
//     }
//     return (
//       <Animated.View
//         style={[
//           styles.loadingContainer,
//           {
//             opacity: this.state.opacity,
//           },
//         ]}>
//         <LoadingAnimation />
//       </Animated.View>
//     );
//   }
// }

// const mapStateToProps = (state: RootState) => {
//   return state;
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     position: 'absolute',
//     zIndex: 9999,
//     backgroundColor: 'transparent',
//     height: '100%',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default connect(mapStateToProps)(ApiLoading) as any;
