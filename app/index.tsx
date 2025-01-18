import { useNavigationReady } from "@ali/hooks/router/use-navigation-ready";
import { useCheckIsLoginHook } from "@ali/hooks/use-check-is-login.hook";

const RootScreen = () => {
  const { isNavigationReady } = useNavigationReady();

  useCheckIsLoginHook(isNavigationReady);

  return <></>;
};

export default RootScreen;
