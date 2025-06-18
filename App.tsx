import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppContainer from './src/AppContainer';
import configStore from './src/config-store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const {store, persistor} = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppContainer />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
