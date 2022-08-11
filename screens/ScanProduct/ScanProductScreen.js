import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextButton, IconButton } from "../../components";
import { constants, SIZES, COLORS, icons, FONTS } from "../../constants";

const ScanProductScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(
    constants.scan_product_option.camera
  );
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: SIZES.padding * 2,
          paddingBottom: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          backgroundColor: COLORS.light,
          zIndex: 1,
        }}
      >
        <IconButton
          icon={icons.close}
          onPress={() => navigation.navigate.goBack()}
        />

        {/* Title */}
        <Text
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.h3,
            fontWeight: "bold",
          }}
        >
          {selectedOption == constants.scan_product_option.camera
            ? "Scan Camera"
            : "Scan QR Code"}{" "}
        </Text>

        {/* Add options */}
        <IconButton icon={icons.flash} iconStyle={{ width: 25, height: 25 }} />

        <IconButton
          icon={icons.question_mark}
          containerStyle={{ marginLeft: SIZES.base }}
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 90,
          paddingTop: SIZES.radius,
          backgroundColor: COLORS.light,
        }}
      >
        <TextButton
          label="Scan QR Code"
          contentContainerStyle={{
            flex: 1,
            height: 55,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedOption == constants.scan_product_option.qr
                ? COLORS.primary
                : COLORS.lightGrey,
          }}
          labelStyle={{
            ...FONTS.h3,
            color:
              selectedOption == constants.scan_product_option.qr
                ? COLORS.secondary
                : COLORS.primary,
          }}
          onPress={() => {
            setSelectedOption(constants.scan_product_option.qr);
          }}
        />
        <TextButton
          label="Scan Camera"
          contentContainerStyle={{
            flex: 1,
            height: 55,
            marginLeft: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedOption == constants.scan_product_option.camera
                ? COLORS.primary
                : COLORS.lightGrey,
          }}
          labelStyle={{
            ...FONTS.h3,
            color:
              selectedOption == constants.scan_product_option.camera
                ? COLORS.secondary
                : COLORS.primary,
          }}
          onPress={() => {
            setSelectedOption(constants.scan_product_option.camera);
          }}
        />
      </View>
    );
  }
  //   Camera
  // const cameraPermission = await Camera.getCameraPermissionStatus()

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default ScanProductScreen;
