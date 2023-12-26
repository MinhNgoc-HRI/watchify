import {StyleSheet} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './src/navigation';
import ActionBarProvider from '@src/stores/actionBar';
const App = () => {
  return (
    <ActionBarProvider>
      <GestureHandlerRootView style={styles.root}>
        <Navigator />
      </GestureHandlerRootView>
    </ActionBarProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
