import {StyleSheet} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './src/navigation';
import PlayerProvider from '@src/stores/player';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import LoadingPortal from '@src/components/LoadingPotal';
import {Host} from 'react-native-portalize';
const App = () => {
  return (
    <PlayerProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={styles.root}>
          <Host>
            <Navigator />
          </Host>
          <LoadingPortal />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PlayerProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
