import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from 'navigations/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </NativeBaseProvider>
        </GestureHandlerRootView>
    );
};

export default App;

const styles = StyleSheet.create({});
