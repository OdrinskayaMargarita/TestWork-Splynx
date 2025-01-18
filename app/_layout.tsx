import { TypeNavigation } from "@ali/types";
import { Stack } from "expo-router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "../src/store/store";


const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={TypeNavigation.INDEX}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={TypeNavigation.LOGIN}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={TypeNavigation.INVOICE_LIST}
            options={{ headerShown: false }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
