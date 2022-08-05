import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, images, FONTS, icons } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import { MotiView, useAnimationState } from "moti";
import { shadow, Shadow } from "react-native-shadow-2";
import { TextButton, FormInput, IconButton } from "../../components";
import AuthMain2 from "./AuthMain2";
// import { useAnimationState } from "moti";

const AuthMain1 = ({ navigation }) => {
  //   const [mode, setMode] = useState("signIn");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(false);

  //   const animationState = useAnimationState({
  //     signIn: {
  //       height: SIZES.height * 0.55,
  //     },
  //     signUp: {
  //       height: SIZES.height * 0.7,
  //     },
  //   });

  function renderSignIn() {
    return (
      <View style={{ marginTop: SIZES.padding, height: SIZES.height * 0.55 }}>
        <Shadow>
          <View
            style={{
              flex: 1,
              width: SIZES.width - SIZES.padding * 2,
              paddingVertical: SIZES.radius,
              paddingHorizontal: SIZES.padding,
              borderRadius: SIZES.radius,
              backgroundColor: "COLORS.light",
            }}
          >
            <Text
              style={{
                width: "60%",
                lineHeight: 45,
                color: COLORS.dark,
                ...FONTS.h1,
                fontWeight: "700",
              }}
            >
              Sign In to continue
            </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={"handled"}
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {/* Email */}
              <FormInput
                containerStyle={{
                  borderRadius: 10,
                  backgroundColor: "gray",
                  height: 55,
                }}
                placeholder="Email"
                value={email}
                onChange={(text) => setEmail(text)}
                prependComponent={
                  <Image
                    source={icons.email}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              {/* Password */}
              <FormInput
                containerStyle={{
                  marginTop: 30,
                  borderRadius: 10,
                  backgroundColor: "gray",
                  height: 55,
                }}
                placeholder="Password"
                value={password}
                secureTextEntry={!isVisble}
                onChange={(text) => setPassword(text)}
                prependComponent={
                  <Image
                    source={icons.lock}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
                appendComponent={
                  <IconButton
                    icon={isVisble ? icons.eye_off : icons.eye}
                    iconStyle={{ tintColor: COLORS.grey }}
                    onPress={() => setIsVisible(!isVisble)}
                  />
                }
              />
              <View style={{ alignItems: "flex-end" }}>
                <TextButton
                  label="Forget Password?"
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: null,
                  }}
                />
              </View>
            </KeyboardAwareScrollView>

            <TextButton
              label="Log In"
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={() => navigation.navigate(AuthMain2)}
            />
          </View>
        </Shadow>
      </View>
    );
  }
  function renderSignUp() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Shadow>
          <View
            style={{
              flex: 1,
              width: SIZES.width - SIZES.padding * 2,
              paddingVertical: SIZES.radius,
              paddingHorizontal: SIZES.padding,
              borderRadius: SIZES.radius,
              backgroundColor: "COLORS.light",
            }}
          >
            <Text>Sign un</Text>
          </View>
        </Shadow>
      </View>
    );
  }
  //   function renderAuthContainer() {
  //     if (mode == "signIn") {
  //       return renderSignIn();
  //     } else {
  //       return renderSignUp();
  //     }
  //   }
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
      <View>{renderSignIn()}</View>
      <TextButton
        label="Toggle"
        onPress={() => {
          if (animationState.current === "signIn") {
            animationState.transitionTo("signUp");
            setMode("signUp");
          } else {
            animationState.transitionTo("signIn");
            setMode("signIn");
          }
        }}
      />
    </View>
  );
};

export default AuthMain1;
