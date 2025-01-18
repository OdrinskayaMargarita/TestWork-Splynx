import { createAsyncThunk } from "@reduxjs/toolkit";

import { invoicesApi } from "../api/api";
import { InvoicesListType } from "../store/types";

export const getInvoicesList = createAsyncThunk<InvoicesListType[] | any, void>(
  "invoices/getInvoicesList",
  async () => {
    const response = await invoicesApi.getInvoicesList();
    console.log("response getInvoicesList", response);
    // return response.data.invoices;
  }
);

export const getInvoiceById = createAsyncThunk<any, { id: string }>(
  "invoices/getInvoiceById",
  async ({ id }) => {
    const response = await invoicesApi.getInvoiceById(id);
    console.log("response", response);
    return response.data;
  }
);
