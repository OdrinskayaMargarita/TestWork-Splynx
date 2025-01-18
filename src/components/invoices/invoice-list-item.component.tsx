import { FC, useEffect, useState } from "react";

import { TypeNavigation } from "@ali/types";
import { Link } from "expo-router";
import { View, Text } from "react-native";

import { tw } from "../../lib/tailwind";
import { InvoiceItemType } from "@ali/types/types";

export const InvoiceListItemComponent: FC<IProps> = ({ item }) => {
  const [invoiceID, setInvoiceID] = useState(0);
  const badge = item.status.badges.find((item) => item.title);

  const getInvoiceID = () => {
    const actionWithInvoiceId = item.actions.find(
      (action) => action.action && action.action.includes("invoice_id")
    );

    if (actionWithInvoiceId) {
      const match = actionWithInvoiceId.action.match(/invoice_id:\s*(\d+)/);
      if (match) {
        const id = parseInt(match[1], 10);
        setInvoiceID(id);
      }
    }

    return null;
  };

  useEffect(() => {
    getInvoiceID();
  }, []);

  return (
    <Link
      href={{
        params: { id: invoiceID },
        pathname: `/${TypeNavigation.INVOICE_MODAL}`,
      }}
      style={tw`border-t border-b border-neutral-800 py-3`}
    >
      <View style={tw`flex flex-row flex-wrap justify-between `}>
        <Text style={tw` w-1/3 text-wrap`}>#{item.number}</Text>
        <Text style={tw` w-1/3 text-wrap text-center`}>
          {item.date_created}
        </Text>
        <Text style={tw` w-1/3 text-wrap text-right`}>{item.date_till}</Text>
      </View>

      <View style={tw`flex items-center flex-row flex-wrap justify-between`}>
        <Text style={tw`text-base font-bold text-gray-900 mt-2 w-1/2`}>
          <Text style={tw`font-medium text-gray-400`}>Total:</Text> {item.total}
        </Text>
        <View style={tw`w-1/2 flex-row justify-end`}>
          <Text
            style={tw`text-wrap px-2 py-0.5 text-white rounded-sm bg-${
              badge ? badge.badge : "white"
            }  `}
          >
            {badge ? badge.title : "-"}
          </Text>
        </View>
      </View>
    </Link>
  );
};

interface IProps {
  item: InvoiceItemType;
}
