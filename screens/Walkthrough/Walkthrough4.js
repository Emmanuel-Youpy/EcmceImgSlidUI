import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import { useDynamicAnimation, MotiImage } from "moti";
import { SIZES, images } from "../../constants";

const Walkthrough4 = ({ animate }) => {
  // Moti Image Position
  //   const motiImage1 = useDynamicAnimation(() => ({
  //     top: "30%",
  //     left: "25%",
  //   }));

  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Image
        source={images.walkthrough_04_02}
        style={{
          ...styles.image,
          top: "35%",
          left: "35%",
          width: 126,
          height: 201,
          zIndex: 1,
        }}
      />

      <Image
        source={images.walkthrough_04_04}
        style={{
          ...styles.image,
          top: "39%",
          right: "58%",
        }}
      />
      <Image
        source={images.walkthrough_04_03}
        style={{
          ...styles.image,
          top: "39%",
          left: "58%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 96,
    height: 162,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});

export default Walkthrough4;
