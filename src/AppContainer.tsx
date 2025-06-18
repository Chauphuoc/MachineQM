import React, {Component} from 'react';
import {
  LogBox,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {connect} from 'react-redux';
import {ApiLoading} from './components/loading';
// import {ToastConfig} from './components/toast/ToastConfig';
import {RootState} from './config-store';
import {GlobalInterface} from './interface/Interface';
import AppStack from './routes/app-stack';
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: {allowFontScaling?: boolean};
}

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]); // Ignore log notification by message
LogBox.ignoreAllLogs();

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;
(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(
  TextInput as unknown as TextInputWithDefaultProps
).defaultProps!.allowFontScaling = false;

let customLog: any = console;
customLog.reportErrorsAsExceptions = false;

interface Iprops extends GlobalInterface {}

interface IState {
  updateVisible: boolean;
}

class AppContainer extends Component<Iprops, IState> {
  listener: any;
  appstateListener: any;
  backgroundListener: any;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      updateVisible: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <AppStack />
        {/* <Toast config={ToastConfig} /> */}
        {/* <ApiLoading /> */}
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return state;
};

export default connect(mapStateToProps)(AppContainer) as any;
