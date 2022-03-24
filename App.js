import React from "react";
import { LogBox } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import getStore from "./store";
import AppNavigator from "./navigations/AppNavigator";

const { persistor, store } = getStore();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
}
