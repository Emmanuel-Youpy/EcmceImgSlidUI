import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Hello</Text>
        <Text>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </Text>
      </View>
    </View>
  );
};

export default Navbar;
