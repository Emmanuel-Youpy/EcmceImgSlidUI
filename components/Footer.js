import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import sanityClient from "../lib/client";

import imageUrlBuilder from "@sanity/image-url";
import TextButton from "./TextButton";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Footer = ({ footerBanner }) => {
  const image = { uri: urlFor(footerBanner.image).url() };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "red",
        borderRadius: 15,
        position: "relative",
        height: 250,
        color: "white",
        width: "100%",
        marginTop: 120,
        // alignItems: "center",
      }}
    >
      <ImageBackground
        source={image}
        style={{
          width: "80%",
          height: "100%",
          // alignItems: "center",
          // justifyContent: "center",
        }}
        resizeMode="cover"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <View syle={{}}>
            <Text style={{ color: "white" }}>{footerBanner.discount}</Text>
            <Text style={{ fontWeight: "900", fontSize: 30, color: "white" }}>
              {footerBanner.largeText1}
            </Text>
            <Text style={{ fontWeight: "900", fontSize: 30, color: "white" }}>
              {footerBanner.largeText2}
            </Text>
            <Text style={{ color: "white" }}>{footerBanner.saleTime}</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>{footerBanner.smallText}</Text>
            <Text style={{ fontWeight: "900", fontSize: 30, color: "white" }}>
              {footerBanner.midText}
            </Text>
            <Text style={{ color: "white" }}>{footerBanner.desc}</Text>
            <TextButton
              label="Shop Now"
              contentContainerStyle={{
                width: 95,
                borderRadius: 10,
                padding: 2,
                marginTop: 10,
                backgroundColor: "white",
              }}
              labelStyle={{ color: "black" }}
            />
          </View>
          {/* Image */}
          {/* <Image source={image} style={{ height: 100, width: 100 }} /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Footer;
