import { useEffect } from "react";

import { useAppRouter } from "@ali/hooks/router/use-app-router";
import { TypeNavigation } from "@ali/types";

import { useAppSelector } from "../store/store";

export const useCheckIsLoginHook = (isNavigationReady: boolean) => {
  const { replaceTo } = useAppRouter();

  const { isLogged } = useAppSelector(({ user }) => user);

  useEffect(() => {
    if (!isNavigationReady) return;
    if (!isLogged) {
      replaceTo(TypeNavigation.LOGIN);
      return;
    }

    replaceTo(TypeNavigation.INVOICE_LIST);
  }, [isNavigationReady, isLogged]);
};
