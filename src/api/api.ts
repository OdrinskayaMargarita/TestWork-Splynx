import axiosInstance from "./axiosInstance";

interface LoginPayload {
  login: string;
  password: string;
}
export const userApi = {
  login: (payload: LoginPayload) => axiosInstance.post("/login", payload),
  logout: () => axiosInstance.post("/logout"),
};

export const invoicesApi = {
  getInvoiceById: (id: string) =>
    axiosInstance.get(`/finance/documents--view?type=invoice&id=${id}`),
  getInvoicesList: () => axiosInstance.get(`/dashboard--get-page-data`),
};
