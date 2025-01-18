import { TypeNavigation } from "@ali/types";
import { useRouter, useSegments } from "expo-router";

export const useAppRouter = () => {
  const navigation = useRouter();
  const segments = useSegments();

  const goRoot = () => {
    navigation.replace(TypeNavigation.ROOT);
  };

  const goBack = () => {
    navigation.back();
  };

  const pushTo = (route: TypeNavigation) => {
    navigation.push(`/${route}`);
  };

  const replaceTo = (route: TypeNavigation) => {
    navigation.replace(`/${route}`);
  };

  return {
    ...navigation,
    goBack,
    goRoot,
    pushTo,
    replaceTo,
    segments,
  };
};
