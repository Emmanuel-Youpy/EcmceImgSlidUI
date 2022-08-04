import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, images } from "../../constants";
// import { MotiView, useAnimationState } from "moti";
import { shadow } from "react-native-shadow-2";

const AuthMain1 = () => {
  const [mode, setMode] = useState("signin");

  const animationState = () => {
    signIn: {
      height: SIZES.height * 0.55;
    }
    signUp: {
      height: SIZES.height * 0.7;
    }
  };

  function renderSignIn() {
    return (
      <View style={{ marginTop: SIZES.padding, height: SIZES.height * 0.55 }}>
        <Shadow>
          <View
            style={{
              flex: 1,
              width: (SIZES.width = SIZES.padding),
              paddingVertical: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.light,
            }}
          ></View>
        </Shadow>
      </View>
    );
  }
  function renderSignUp() {}
  function renderAuthContainer() {
    if (mode == "signIn") {
      return renderSignIn();
    } else {
      return renderSignUp();
    }
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey,
      }}
    >
      {/* Logo */}
      <Image
        source={images.logo}
        style={{
          alignSelf: "center",
          marginTop: SIZES.padding + 15,
          width: 50,
          height: 50,
        }}
      />
      {/* Auth Container */}
      <View>{renderAuthContainer()}</View>
    </View>
  );
};

export default AuthMain1;
