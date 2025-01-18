export interface IStore {
  invoices: IInvoicesList;
  user: IUserList;
}

export interface IUserList {
  login: string;
  isLogged: boolean;
}

export interface IInvoicesList {
  list: InvoicesListType[];
  currentInvoice: any;
}

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
