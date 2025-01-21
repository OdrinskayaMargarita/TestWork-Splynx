import { useEffect } from "react";

import { useAppRouter } from "@ali/hooks/router/use-app-router";
import { TypeNavigation } from "@ali/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useCheckIsLoginHook = (isNavigationReady: boolean) => {
  const { replaceTo } = useAppRouter();

  useEffect(() => {
    (async () => {
      if (!isNavigationReady) return;
      const isLogged = await AsyncStorage.getItem("authToken");

      if (!isLogged) {
        replaceTo(TypeNavigation.LOGIN);
        return;
      }

      replaceTo(TypeNavigation.INVOICE_LIST);
    })();
  }, [isNavigationReady]);
};
