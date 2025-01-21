export type InvoicesListType = InvoiceItemType[];

export type InvoiceItemType = {
  id: number;
  customer_id: number;
  date_created: string;
  real_create_datetime: string;
  date_updated: string;
  date_payment: string;
  date_till: string;
  use_transactions: string;
  note: string;
  memo: string;
  number: string;
  total: number;
  due: number;
  payment_id: number;
  type: string;
  payd_from_deposit: string;
  status: InvoiceStatus;
  is_sent: string;
  disable_cache: null;
  added_by: null;
  added_by_id: null;
  items: any[];
};

export enum InvoiceStatus {
  PAID = "paid",
  NOT_PAID = "not_paid",
}

export type InvoiceDetailDocumentsItemType = {
  id: number;
  customer_id: number;
  date_created: string;
  real_create_datetime: string;
  date_updated: string;
  date_payment: string;
  date_till: string;
  use_transactions: string;
  note: string;
  memo: string;
  number: string;
  total: number;
  due: number;
  payment_id: number;
  type: string;
  payd_from_deposit: string;
  status: InvoiceStatus;
  is_sent: string;
  disable_cache: null;
  added_by: null;
  added_by_id: null;
  items: InvoiceDetailInnerItemType[];
};

export type InvoiceDetailInnerItemType = {
  id: number;
  pos: number;
  description: string;
  quantity: number;
  unit: string;
  price: string;
  tax: string;
  tax_amount: number;
  period_from: string;
  period_to: string;
  transaction_id: number;
  isCorrection: boolean;
  categoryIdForTransaction: null;
  deleteTransaction: boolean;
  tax_id: number;
};
