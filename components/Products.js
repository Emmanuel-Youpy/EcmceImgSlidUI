import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import TextButton from "./TextButton";
import sanityClient from "../lib/client";

import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Products = ({ productx }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          // flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "lightgray",
          borderRadius: 10,
          marginLeft: 5,
          padding: 5,
        }}
      >
        <View style={{}}>
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              source={{
                uri: urlFor(productx.image[0]).url(),
              }}
              style={{ height: 100, width: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>{productx.name}</Text>
        <Text>${productx.price}</Text>
      </View>
    </View>
  );
};

export default Products;
