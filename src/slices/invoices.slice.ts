import { createSlice } from "@reduxjs/toolkit";

import { getInvoiceById, getInvoicesList } from "../actions/invoices.action";
import { IStore } from "../store/types";

const initialState: IStore["invoices"] = {
  list: [],
  currentInvoice: null,
};

export const invoicesSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(
      getInvoicesList.fulfilled,
      (state: IStore["invoices"], action) => {
        state.list = action.payload;
      }
    );
    builder.addCase(
      getInvoiceById.fulfilled,
      (state: IStore["invoices"], action) => {
        state.currentInvoice = action.payload;
      }
    );
  },
  initialState,
  name: "invoices",

  reducers: {
    clearInvoices: (state) => {
      state.list = initialState.list;
    },
  },
});

export const { clearInvoices } = invoicesSlice.actions;
