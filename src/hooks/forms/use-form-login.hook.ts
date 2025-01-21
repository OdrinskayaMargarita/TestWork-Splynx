import { useForm, Resolver, FieldErrors } from "react-hook-form";

export interface IForm {
  login: string;
  password: string;
}

const regex = /^(?!\s*$).+/;

export const useFormLogin = () => {
  const resolver: Resolver<IForm> = async (values) => {
    const errors: FieldErrors<IForm> = {};

    if (!values.login) {
      errors.login = {
        message: "This login is required.",
        type: "required",
      };
    } else if (!regex.test(values.login)) {
      errors.login = {
        message: "Please provide a correct login.",
        type: "pattern",
      };
    } else if (values.login.length > 24) {
      errors.login = {
        message: "Max length for field 24 symbol",
        type: "maxLength",
      };
    }

    if (!values.password) {
      errors.password = {
        message: "This password is required.",
        type: "pattern",
      };
    } else if (!regex.test(values.password)) {
      errors.login = {
        message: "Please provide a correct password.",
        type: "pattern",
      };
    } else if (values.password.length > 24) {
      errors.password = {
        message: "Max length for field 24 symbol",
        type: "maxLength",
      };
    }

    return {
      errors: errors,
      values: values ? values : {},
    };
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<IForm>({
    resolver,
  });

  return { control, errors, getValues, handleSubmit, setError };
};
