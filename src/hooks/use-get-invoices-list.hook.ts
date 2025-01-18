import { useEffect } from "react";

// import { getInvoicesList } from "../actions/invoices.action";
import { clearUser } from "../slices/user.slice";
import { useAppDispatch } from "../store/store";

export const useGetInvoicesList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(clearUser());
      // await dispatch(getInvoicesList());
    })();
  }, [dispatch]);
};
