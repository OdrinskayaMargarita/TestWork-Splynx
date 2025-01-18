import { InvoiceDetailModalComponent } from "@ali/components/invoices/invoice-detail-modal.component";
import { useRoute } from "@react-navigation/core";
import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

import { tw } from "../../src/lib/tailwind";

const InvoiceModal = () => {
  const detailItem = {
    additionalAttributes: [],
    document: {
      added_by: "system",
      added_by_id: 0,
      customer_id: 6,
      date_created: "2025-01-01",
      date_created_formatted: "2025-01-01",
      date_payment: "0000-00-00",
      date_payment_formatted: null,
      date_till: "2025-01-29",
      date_till_formatted: "2025-01-29",
      date_updated: "2025-01-18",
      date_updated_formatted: "2025-01-18",
      delete_transactions: true,
      deleted: "0",
      disable_cache: null,
      due: 21200,
      due_formatted: "21200.00\u00a0$",
      id: 9,
      is_sent: "0",
      mark: null,
      memo: "",
      noCache: false,
      note: "",
      number: "202501020003",
      payd_from_deposit: "0",
      payment_id: 0,
      real_create_datetime: "2025-01-18 00:14:02",
      recalculated: false,
      status: "not_paid",
      total: 21200,
      type: "recurring",
      use_transactions: "1",
    },
    documentItems: [
      {
        description: "Internet - WIFI 2MB/1MB",
        id: 9,
        invoice_id: 9,
        period: "2016-04-01 - 2025-01-31",
        period_for_view: "2016-04-01 - 2025-01-31",
        period_from: "2016-04-01",
        period_to: "2025-01-31",
        price: "17520.6612",
        quantity: 1,
        tax: "21",
        tax_id: 1,
        total: "21200.00\u00a0$",
        transaction_id: 13,
        unit: "",
        with_tax: "21200.0001",
      },
    ],
    taxTotal: "3679.34\u00a0$",
    totalWithTax: "21200.00\u00a0$",
    totalWithoutTax: "17520.66\u00a0$",
  };

  const route = useRoute();
  const id = route.params || {};

  console.log(id);

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
            Number: #{detailItem.document.number}
          </Text>
          <View
            style={tw`flex flex-row items-center justify-between w-full mb-1.5`}
          >
            <Text style={tw`w-1/2`}>Document Date:</Text>
            <Text style={tw`w-1/2 text-right`}>
              {detailItem.document.date_created}
            </Text>
          </View>
          <View
            style={tw`flex flex-row items-center justify-between w-full mb-1.5`}
          >
            <Text style={tw`w-1/2`}>Due Date:</Text>
            <Text style={tw`w-1/2 text-right`}>
              {detailItem.document.date_till}
            </Text>
          </View>

          {detailItem.documentItems.map((item, key) => (
            <View key={key}>
              <InvoiceDetailModalComponent item={item} />
            </View>
          ))}

          <View style={tw`mt-4`}>
            <Text style={tw`text-right mb-2`}>
              Total without Tax:{" "}
              <Text style={tw`font-bold ml-4`}>
                {detailItem.totalWithoutTax}
              </Text>
            </Text>
            <Text style={tw`text-right mb-4`}>
              TAX: <Text style={tw`font-bold ml-4`}>{detailItem.taxTotal}</Text>
            </Text>
            <Text style={tw`text-right mb-2 font-bold text-xl`}>
              Total: <Text style={tw` ml-4`}>{detailItem.totalWithTax}</Text>
            </Text>
          </View>

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
