import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SIZES, images } from "../../constants";

const Walkthrough3 = () => {
  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Image
        source={images.walkthrough_03_01}
        style={{
          ...styles.image,
          top: "60%",
          left: "48%",
        }}
      />
      <Image
        source={images.walkthrough_03_02}
        style={{
          ...styles.image,
          top: "50%",
          right: "48%",
        }}
      />
      <Image
        source={images.walkthrough_04_01}
        style={{
          ...styles.image,
          top: "25%",
          right: "48%",
        }}
      />
      <Image
        source={images.walkthrough_02_05}
        style={{
          ...styles.image,
          top: "35%",
          left: "48%",
        }}
      />
    </View>
  );
};

export default Walkthrough3;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 140,
    height: 122,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});
