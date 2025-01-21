import { InvoiceListItemComponent } from "@ali/components/invoices/invoice-list-item.component";
import { ContainerComponent } from "@ali/components/templates/container.component";
import { Text, View } from "react-native";

import { tw } from "../../src/lib/tailwind";
import { useGetInvoiceListQuery } from "../../src/queries/useGetInvoiceList.query";

const InvoiceList = () => {
  const { data: list } = useGetInvoiceListQuery();

  const isListEmpty = list?.length;

  return (
    <ContainerComponent>
      <View style={tw`flex w-full pt-4`}>
        <Text style={tw` text-xl text-blue-900 font-bold mb-6 uppercase`}>
          Invoice List
        </Text>
        {isListEmpty ? (
          list?.map((item, key) => (
            <View key={key}>
              <InvoiceListItemComponent item={item} />
            </View>
          ))
        ) : (
          <Text
            style={tw`text-xl text-gray-900 font-bold mt-4 uppercase text-center`}
          >
            List Empty
          </Text>
        )}
      </View>
    </ContainerComponent>
  );
};

export default InvoiceList;
