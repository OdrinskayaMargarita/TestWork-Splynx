import { FC, ReactNode } from "react";

import { SafeAreaView, View } from "react-native";

import { tw } from "../../lib/tailwind";

export const ContainerComponent: FC<IProps> = ({ children }) => {
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <View style={tw`bg-white px-4 flex h-full`}>{children}</View>
    </SafeAreaView>
  );
};

interface IProps {
  children: ReactNode;
}
