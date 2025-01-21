import { FC } from "react";

import { TypeNavigation } from "@ali/types";
import { InvoiceItemType, InvoiceStatus } from "@ali/types/types";
import { Link } from "expo-router";
import { Text, View } from "react-native";

import { tw } from "../../lib/tailwind";

export const InvoiceListItemComponent: FC<IProps> = ({ item }) => {
  const isPaid = item.status === InvoiceStatus.PAID;
  return (
    <Link
      href={{
        params: { id: item.id },
        pathname: `/${TypeNavigation.INVOICE_MODAL}`,
      }}
      style={tw`border-b border-neutral-800 py-3`}
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
            style={tw`text-wrap px-2 py-0.5 text-white rounded-sm bg-indigo-600 ${
              isPaid ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isPaid ? "Paid" : "Not Paid"}
          </Text>
        </View>
      </View>
    </Link>
  );
};

interface IProps {
  item: InvoiceItemType;
}
