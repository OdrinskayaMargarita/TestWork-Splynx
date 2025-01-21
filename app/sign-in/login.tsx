import { LoginInputComponent } from "@ali/components/inputs/login-input.component";
import { PasswordInputComponent } from "@ali/components/inputs/password-input.component";
import { ContainerComponent } from "@ali/components/templates/container.component";
import { useFormLogin } from "@ali/hooks/forms/use-form-login.hook";
import { useButtonWithGeneratedId } from "@ali/hooks/use-button-with-id.hook";
import { Text, View } from "react-native";

import { tw } from "../../src/lib/tailwind";
import { useLoginMutation } from "../../src/queries/useLoginMutation.query";

const Login = () => {
  const { control, errors, handleSubmit, getValues } = useFormLogin();

  const loginError = errors?.login;
  const loginPassword = errors?.password;

  const { mutate } = useLoginMutation();

  const onSubmit = () => {
    const { password, login } = getValues();

    const data = {
      auth_type: "customer",
      login: login,
      password: password,
    };

    mutate(data);
  };

  const [LoginButton] = useButtonWithGeneratedId({
    buttonText: "Login",
    loadingText: "Logging in...",
    onSubmit: handleSubmit(onSubmit),
  });

  return (
    <ContainerComponent>
      <View style={tw`flex items-center justify-center h-full w-full`}>
        <Text
          style={tw`text-center text-xl text-blue-900 font-bold mb-6 uppercase`}
        >
          Client Portal
        </Text>
        <LoginInputComponent control={control} error={loginError} />
        <PasswordInputComponent control={control} error={loginPassword} />
        <LoginButton />
      </View>
    </ContainerComponent>
  );
};

export default Login;
