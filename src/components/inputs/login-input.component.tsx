import { FC } from "react";

import { IForm } from "@ali/hooks/forms/use-form-login.hook";
import { Control, Controller, FieldError } from "react-hook-form";
import { TextInput, View, Text } from "react-native";

import { tw } from "../../lib/tailwind";

export const LoginInputComponent: FC<IProps> = ({ control, error }) => {
  return (
    <View style={tw`mb-2 w-full relative pb-4`}>
      <Text style={tw`text-base mb-2 text-gray-900`}>Login:</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={tw`border border-gray-400 rounded-3xl px-3 py-2 text-black text-base`}
            onChangeText={onChange}
            value={value}
            placeholder={"Enter Login"}
          />
        )}
        name="login"
        defaultValue=""
      />
      <Text style={tw`text-red-600 text-xs absolute bottom-0 left-1`}>
        {error?.message ? error?.message : ""}
      </Text>
    </View>
  );
};

interface IProps {
  control: Control<IForm>;
  error?: FieldError;
}
