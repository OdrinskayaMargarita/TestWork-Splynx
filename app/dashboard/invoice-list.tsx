import { ContainerComponent } from "@ali/components/templates/container.component";
import { useGetInvoicesList } from "@ali/hooks/use-get-invoices-list.hook";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";

import { tw } from "../../src/lib/tailwind";
import { useAppSelector } from "../../src/store/store";

const InvoiceList = () => {
  const { list } = useAppSelector(({ invoices }) => invoices);

  console.log("list", list);
  useGetInvoicesList();

  return (
    <ContainerComponent>
        <View style={tw`flex w-full pt-4`}>
            <View style={tw`flex flex-row items-center justify-end mb-3 py-2`}>
                <Text style={tw`text-gray-500 font-semibold mr-4`}>090900</Text>

                <AntDesign name="logout" size={20} color="black" />
            </View>

            <Text style={tw` text-xl text-blue-900 font-bold mb-6 uppercase`}>
                Invoice List
            </Text>
            {/*{list?.length ? (*/}
            {/*  list?.map((item) => <InvoiceListItemComponent item={item} />)*/}
            {/*) : (*/}
            {/*  <Text*/}
            {/*    style={tw`text-xl text-gray-900 font-bold mt-4 uppercase text-center`}*/}
            {/*  >*/}
            {/*    List Empty*/}
            {/*  </Text>*/}
            {/*)}*/}        </View>
    </ContainerComponent>
  );
};

export default InvoiceList;
