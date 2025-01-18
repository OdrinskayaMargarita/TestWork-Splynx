export type InvoicesListType = {
  invoices: {
    items: InvoiceItemType[];
    headers: string[];
  };
};

export type InvoiceItemType = {
  type: {
    title: string;
    type: string;
    badge: string;
  };
  number: string;
  date_created: string;
  total: string;
  due: {
    title: string;
    type: string;
    color: string;
  };
  date_till: string;
  date_payment: string;
  actions: InvoiceActionItemType[];
  status: {
    type: string;
    badges: InvoiceStatusBadgeType[];
  };
  statusEnabled: boolean;
};

export type InvoiceActionItemType = {
  icon: string;
  type: string;
  title: string;
  target: string;
  action: string;
};

export type InvoiceStatusBadgeType = {
  title: string;
  type: string;
  badge: string;
};

export type InvoiceDetailItemType = {
  taxName: string;
  documentItems: InvoiceDetailDocumentsItemType[];
  totalWithTax: string;
  totalWithoutTax: string;
  taxTotal: string;
  document: InvoiceDetailItemDocumentType;
};

export type InvoiceDetailDocumentsItemType = {
  id: number;
  description: string;
  invoice_id: number;
  price: string;
  quantity: number;
  tax: string;
  tax_id: number;
  transaction_id: number;
  unit: string;
  with_tax: string;
  total: string;
  period_from: string;
  period_to: string;
  period: string;
  period_for_view: string;
};

export type InvoiceDetailItemDocumentType = {
  deleted: string;
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
  status: string;
  mark: string | null;
  recalculated: boolean;
  noCache: boolean;
  is_sent: string;
  delete_transactions: boolean;
  disable_cache: string | null;
  added_by: string;
  added_by_id: number;
  date_till_formatted: string;
  date_created_formatted: string;
  date_payment_formatted: string | null;
  date_updated_formatted: string;
  due_formatted: string;
};
