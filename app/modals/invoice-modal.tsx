import { InvoiceDetailModalComponent } from "@ali/components/invoices/invoice-detail-modal.component";
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

import { tw } from "../../src/lib/tailwind";
import { useGetInvoiceQuery } from "../../src/queries/useGetInvoice.query";

const InvoiceModal = () => {
  const params: { id: string } = useLocalSearchParams();
  const id = params.id || "";

  const { data: invoice, isLoading } = useGetInvoiceQuery(id);

  if (!invoice || isLoading) return <Text> "Loading ....."</Text>;

  return (
    <Animated.View
      entering={FadeIn}
      style={{
        alignItems: "center",
        backgroundColor: "#00000040",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: "90%",
          padding: "20px",
          width: "96%",
        }}
      >
        <ScrollView style={tw`p-4`}>
          <Text
            style={tw`text-center text-base font-bold mb-5 text-xl text-blue-900`}
          >
            Number: #{invoice.id}
          </Text>
          <View
            style={tw`flex flex-row items-center justify-between w-full mb-1.5`}
          >
            <Text style={tw`w-1/2`}>Document Date:</Text>
            <Text style={tw`w-1/2 text-right`}>{invoice.date_created}</Text>
          </View>
          <View
            style={tw`flex flex-row items-center justify-between w-full mb-1.5`}
          >
            <Text style={tw`w-1/2`}>Due Date:</Text>
            <Text style={tw`w-1/2 text-right`}>{invoice.date_till}</Text>
          </View>

          {invoice.items.map((item, key) => (
            <View key={key}>
              <InvoiceDetailModalComponent item={item} />
            </View>
          ))}

          <View>
            <Link
              style={tw`text-gray-900 text-center bg-red-200 flex w-full items-center justify-center transition-all shadow-sm px-3 py-3 rounded-3xl mt-6`}
              href="/"
            >
              <Text>Close</Text>
            </Link>
          </View>
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default InvoiceModal;
