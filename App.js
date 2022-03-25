import React from "react";
import { LogBox } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "react-native-gesture-handler";

import getStore from "./store";
import AppNavigator from "./navigations/AppNavigator";

const { persistor, store } = getStore();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppNavigator />
      </PersistGate>
    </StoreProvider>
  );
}
