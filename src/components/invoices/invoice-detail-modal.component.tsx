import { FC } from "react";

import { InvoiceDetailDocumentsItemType } from "@ali/types/types";
import { Text, View } from "react-native";

import { tw } from "../../lib/tailwind";

export const InvoiceDetailModalComponent: FC<IProps> = ({ item }) => {
  return (
    <View style={tw`w-full border-b border-t border-gray-400 py-2`}>
      <View style={tw`flex flex-row items-center justify-between mb-1.5`}>
        <Text style={tw`w-1/2`}>Description:</Text>
        <Text style={tw`w-1/2 text-right`}>{item.description}</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between  mb-1.5`}>
        <Text style={tw`w-1/2`}>Quantity:</Text>
        <Text style={tw`w-1/2 text-right`}>{item.quantity}</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between  mb-1.5`}>
        <Text style={tw`w-1/2`}>Price:</Text>
        <Text style={tw`w-1/2 text-right`}>{item.price}</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between  mb-1.5`}>
        <Text style={tw`w-1/2`}>TAX %:</Text>
        <Text style={tw`w-1/2 text-right`}>{item.tax}</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between  mb-1.5`}>
        <Text style={tw`w-1/2`}>With TAX:</Text>
        <Text style={tw`w-1/2 text-right`}>{item.with_tax}</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between`}>
        <Text style={tw`w-1/2`}>Total:</Text>
        <Text style={tw`w-1/2 text-right`}>{item.total}</Text>
      </View>
    </View>
  );
};

interface IProps {
  item: InvoiceDetailDocumentsItemType;
}
