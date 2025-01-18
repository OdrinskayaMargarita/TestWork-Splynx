import { LoginInputComponent } from "@ali/components/inputs/login-input.component";
import { PasswordInputComponent } from "@ali/components/inputs/password-input.component";
import { ContainerComponent } from "@ali/components/templates/container.component";
import { useFormLogin } from "@ali/hooks/forms/use-form-email.hook";
import { useAppRouter } from "@ali/hooks/router/use-app-router";
import { useButtonWithGeneratedId } from "@ali/hooks/use-button-with-id.hook";
import { TypeNavigation } from "@ali/types";
import { Text, View } from "react-native";

import { loginAction } from "../../src/actions/login.action";
import { tw } from "../../src/lib/tailwind";
import { useAppDispatch } from "../../src/store/store";

const Login = () => {
  const { replaceTo } = useAppRouter();

  const dispatch = useAppDispatch();

  const { control, errors, handleSubmit, getValues } = useFormLogin();

  const loginError = errors?.login;
  const loginPassword = errors?.password;

  const { password, login } = getValues();

  const onSubmit = async () => {
    await dispatch(loginAction({ login, password }));

    replaceTo(TypeNavigation.INVOICE_LIST);
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
