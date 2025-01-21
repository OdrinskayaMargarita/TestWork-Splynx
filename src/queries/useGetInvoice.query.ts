import { InvoiceDetailDocumentsItemType } from "@ali/types/types";
import { useQuery } from "@tanstack/react-query";

import axiosInstance from "../api/axiosInstance";

export const useGetInvoiceQuery = (id: string) => {
  return useQuery<InvoiceDetailDocumentsItemType>({
    queryFn: async () =>
      await axiosInstance
        .get(`/admin/finance/invoices/${id}`)
        .then((res) => res.data),
    queryKey: ["invoice-item", id],
  });
};
