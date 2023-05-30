import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import {
  MD3DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import LoginPage from "./pages/LoginPage";
import WalletDefaultPage from "./pages/WalletDefaultPage";
import WalletTransactionsPage from "./pages/WalletTransactionsPage";

// Warning: Keep queryClient out of App() so its same instance when App() re-renders
const queryClient = new QueryClient();
const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider theme={MD3DarkTheme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
              <Stack.Screen
                name="LoginPage"
                options={{ headerShown: false }}
              >
                {/*
                  CodeStyle: *Drill Down Nav Props* instead of organisms & below
                  having them -- so it's obvious where navigation is coming from 
                */}
                {(props) => (
                  <LoginPage
                    {...props}
                    navigation={props.navigation} // *Drill Down Nav Props*
                    navigationName="WalletDefaultPage"
                  />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="WalletDefaultPage"
                options={{ headerShown: false }}
              >
                {(props) => (
                  <WalletDefaultPage
                    {...props}
                    navigation={props.navigation} // *Drill Down Nav Props*
                    navigationName="WalletTransactionsPage"
                  />
                )}
              </Stack.Screen>
              {/* FIXME: WalletDataTable complaining about useNativeDriver / RTC animation warnings */}
              <Stack.Screen
                name="WalletTransactionsPage"
                options={{ headerShown: false }}
              >
                {(props) => (
                  <WalletTransactionsPage
                    {...props}
                    navigation={props.navigation} // *Drill Down Nav Props*
                    navigationName="LoginPage"
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
// const borderColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  }
});

export default App;
