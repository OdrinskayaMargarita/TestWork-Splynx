import { Toast } from "toastify-react-native";

export const showErrorToasts = (message: string) => {
  Toast.error(message);
};

export const showSuccessToasts = (message: string) => {
  Toast.success(message);
};
