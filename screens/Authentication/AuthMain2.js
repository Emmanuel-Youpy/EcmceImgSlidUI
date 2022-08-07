import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, images, FONTS, icons } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import { MotiView, useAnimationState } from "moti";
import { shadow, Shadow } from "react-native-shadow-2";
import {
  TextButton,
  FormInput,
  IconButton,
  CountryDropDown,
  CheckBox,
} from "../../components";

const AuthMain2 = ({ navigation }) => {
  // Country
  const [countries, setCountries] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);
  const [showCountryModal, setShowCountryModal] = React.useState(false);

  function renderCountryModal() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCountryModal}
      >
        <TouchableWithoutFeedback onPress={() => setShowCountryModal(false)}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.dark80,
            }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.light,
                borderRadius: SIZES.radius,
              }}
            >
              <FlatList
                data={countries}
                keyExtractor={(item) => item.code}
                contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  paddingBottom: SIZES.padding,
                }}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: SIZES.radius,
                      }}
                      onPress={() => {
                        console.log(item);
                        setSelectedCountry(item);
                        setShowCountryModal(false);
                      }}
                    >
                      <Image
                        source={{ uri: item.flag }}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 30,
                        }}
                      />
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: SIZES.radius,
                          ...FONTS.body3,
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  React.useEffect(() => {
    // Fetch countires
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let countryData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
          };
        });

        setCountries(countryData);
      });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(false);

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
            <Text
              style={{
                width: "60%",
                lineHeight: 45,
                ...FONTS.h1,
                fontWeight: "700",
              }}
            >
              Create new Account
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
              {/* Name */}
              <FormInput
                containerStyle={{
                  marginTop: 30,

                  borderRadius: SIZES.radius,
                  backgroundColor: "gray",
                  height: 55,
                }}
                placeholder="Name"
                value={name}
                onChange={(text) => setName(text)}
                prependComponent={
                  <Image
                    source={icons.person}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              {/* Email */}
              <FormInput
                containerStyle={{
                  marginTop: 20,
                  borderRadius: SIZES.radius,
                  backgroundColor: "red",
                  height: 55,
                }}
                placeholder="Email"
                value={name}
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
              {/* Phone */}
              <FormInput
                containerStyle={{
                  marginTop: 20,
                  borderRadius: SIZES.radius,
                  backgroundColor: "red",
                  height: 55,
                }}
                placeholder="Phone"
                value={phone}
                onChange={(text) => setPhone(text)}
                prependComponent={
                  <Image
                    source={icons.phone}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              <CountryDropDown
                containerStyle={{ marginTop: SIZES.radius }}
                selectedCountry={selectedCountry}
                onPress={() => setShowCountryModal(!showCountryModal)}
              />

              {/* PassWord */}
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
              {/* Termas abd Conditions */}
              <CheckBox
                containerStyle={{
                  marginTop: SIZES.radius,
                }}
                isSelected={termsChecked}
                onPress={() => setTermsChecked(!termsChecked)}
              />
            </KeyboardAwareScrollView>
            <TextButton
              label="Create Account"
              contentContainerStyle={{
                height: 55,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={() => console.log("create account")}
            />
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
      <View style={{ height: "70%" }}>{renderSignUp()}</View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <Text style={{ color: "lightgrey" }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("AuthMain1")}>
          <Text style={{ color: COLORS.secondary }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthMain2;
