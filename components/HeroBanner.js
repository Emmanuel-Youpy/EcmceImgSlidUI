import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import TextButton from "./TextButton";
import sanityClient from "../lib/client";

import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const HeroBanner = ({
  smallText,
  midText,
  buttonText,
  description,
  desc,
  bannerr,
}) => {
  const image = { uri: urlFor(bannerr.image).url() };
  return (
    <View style={{ height: 200, backgroundColor: "white", padding: 5 }}>
      <ImageBackground
        source={image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <View style={{ paddingTop: 30 }}>
          <Text>{bannerr.smallText}</Text>
          <Text style={{ fontSize: 20 }}>{bannerr.midText}</Text>
          {/* <Image
            source={{
              uri: urlFor(bannerr.image).url(),
            }}
            style={{ height: 200 }}
          /> */}
          <View style={{ paddingTop: 20 }}>
            <TextButton
              label={bannerr.buttonText}
              contentContainerStyle={{
                width: 110,
                borderRadius: 10,
                padding: 2,
              }}
              //   onPress={bannerr.product}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={{ position: "absolute", bottom: 0, right: 0, padding: 20 }}>
        <Text>{bannerr.description}</Text>
        <Text>{bannerr.desc}</Text>
      </View>
    </View>
  );
};

export default HeroBanner;
