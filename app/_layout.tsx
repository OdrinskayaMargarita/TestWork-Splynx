import { TypeNavigation } from "@ali/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import ToastManager from "toastify-react-native";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ToastManager />
    </QueryClientProvider>
  );
};

export default RootLayout;
