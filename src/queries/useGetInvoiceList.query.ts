import { InvoicesListType } from "@ali/types/types";
import { useQuery } from "@tanstack/react-query";

import axiosInstance from "../api/axiosInstance";

export const useGetInvoiceListQuery = () => {
  return useQuery<InvoicesListType>({
    queryFn: () =>
      axiosInstance.get("/admin/finance/invoices").then((res) => res.data),
    queryKey: ["invoice-list"],
  });
};
