import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <View className="p-6">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/profile")}
        >
          Ajustes
        </CustomButton>

        <CustomButton
          varian="text-only"
          onPress={() => router.push("/products")}
        >
          test
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default index;
