import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/Screens/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
