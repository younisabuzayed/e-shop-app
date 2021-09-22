import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Header } from './src/Components';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/Navigations/BottomTab';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store} >
      <SafeAreaView
        style={{flex: 1}}>
          <NavigationContainer>
            <NativeBaseProvider>
                <Header />
                <BottomTab />
            </NativeBaseProvider>
          </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
