import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextButton } from "../../components";
import { constants } from "../../constants";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextButton
        label="Scan"
        onPress={() => navigation.navigate("ScanProductScreen")}
      />
    </View>
  );
};

export default HomeScreen;
