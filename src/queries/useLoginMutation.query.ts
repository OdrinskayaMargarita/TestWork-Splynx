import { useAppRouter } from "@ali/hooks/router/use-app-router";
import { TypeNavigation } from "@ali/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "../api/axiosInstance";

interface Response {
  data: any;
  status: number;
  token: string;
}

type LoginDataType = {
  login: string;
  password: string;
};

export const useLoginMutation = () => {
  const { replaceTo } = useAppRouter();

  const mutation = useMutation<Response, Error, LoginDataType>({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/admin/auth/tokens", data);

      if (res.data.access_token) {
        await AsyncStorage.setItem("authToken", res.data.access_token);
        replaceTo(TypeNavigation.INVOICE_LIST);
      }

      return res.data;
    },
  });

  return mutation;
};
