import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import { useDynamicAnimation, MotiImage } from "moti";
import { SIZES, images } from "../../constants";

const Walkthrough2 = ({ animate }) => {
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
        source={images.walkthrough_02_01}
        style={{
          ...styles.image,
          top: "35%",
          left: "35%",
          width: 106,
          height: 161,
          zIndex: 1,
        }}
      />
      <Image
        source={images.walkthrough_02_02}
        style={{
          ...styles.image,
          top: "50%",
          left: "58%",
        }}
      />
      <Image
        source={images.walkthrough_02_03}
        style={{
          ...styles.image,
          top: "50%",
          right: "58%",
        }}
      />
      <Image
        source={images.walkthrough_02_04}
        style={{
          ...styles.image,
          top: "25%",
          right: "58%",
        }}
      />
      <Image
        source={images.walkthrough_02_05}
        style={{
          ...styles.image,
          top: "25%",
          left: "58%",
        }}
      />
      <Image
        source={images.walkthrough_02_06}
        style={{
          ...styles.image,
          top: "10%",
          right: "40%",
        }}
      />
      <Image
        source={images.walkthrough_02_07}
        style={{
          ...styles.image,
          top: "65%",
          right: "40%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});

export default Walkthrough2;
