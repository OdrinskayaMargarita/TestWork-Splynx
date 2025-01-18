import React, { FC, FormEvent, useState } from "react";

import { uuid } from "expo-modules-core";
import { TouchableWithoutFeedback, Text, View } from "react-native";

import { tw } from "../lib/tailwind";

const generatedId = uuid.v4();

export const useButtonWithGeneratedId = ({
  onSubmit,
  buttonText,
  loadingText,
  isDisabled = false,
  backgroundColor = "bg-blue-500",
  textColor = "text-white",
  fontWeight = "font-semibold",
  style,
}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      await onSubmit();
    } finally {
      setIsLoading(false);
    }
  };

  const ButtonWithGeneratedId: React.FC = () => (
    <TouchableWithoutFeedback
      key={generatedId}
      onPress={handleButtonClick}
      disabled={isLoading || isDisabled}
    >
      <View
        style={tw`${
          isLoading || isDisabled ? "opacity-70" : ""
        } flex w-full items-center justify-center transition-all  shadow-sm px-3 py-3 rounded-3xl mt-6 ${backgroundColor} ${
          isLoading || isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        } ${style ?? ""}`}
      >
        <Text style={tw`text-base ${fontWeight} ${textColor}`}>
          {isLoading ? loadingText : buttonText}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return [ButtonWithGeneratedId, handleButtonClick] as [
    FC,
    (e: MouseEvent | FormEvent) => Promise<void>
  ];
};

interface IProps {
  onSubmit: () => Promise<void>;
  buttonText: string;
  loadingText: string;
  isDisabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  fontWeight?: string;
  style?: string;
}
