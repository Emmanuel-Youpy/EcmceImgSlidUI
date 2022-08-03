import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SIZES, constants } from "../../constants";
import { FlatList } from "react-native-gesture-handler";
import img from "../../assets/img/img";
import imgsliders1 from "../../assets/img/img";

ITEM_WIDTH = 120;

const Walkthrough1 = () => {
  //   Row 1
  const [row1Images, setRow1Images] = React.useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);

  const [currentPosition, setCurrentPosition] = React.useState(0);

  // Row 2
  const [row2Images, setRow2Images] = React.useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);

  const [row2CurrentPosition, setRow2CurrentPosition] = React.useState(0);

  //   Ref
  const row1FlatListRef = React.useRef();
  const row2FlatListRef = React.useRef();

  // useEffect(() => {
  //   let positionTimer;

  //   const timer = () => {
  //     positionTimer = setTimeout(() => {
  //       // Increment scroll position
  //       // Slider 1
  //       setCurrentPosition(prevPosition => {
  //         const position = Number(prevPosition) + 1;
  //         row1FlatListRef?.current?.scrollToOffset({offset: position, animated: false})

  //         // const maxOffset = co
  //       })
  //       // Slider 2
  //     }, 32);
  //   };
  //   timer();

  //   return () => {
  //     clearTimeout(positionTimer);
  //   };
  // }, []);

  return (
    <View>
      {/* <Slider 1 */}
      <FlatList
        ref={row1FlatListRef}
        decelerationRate="fast"
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(_, index) => `Slider1_${index}`}
        data={row1Images}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item} style={{ width: 110, height: 110 }} />
            </View>
          );
        }}
      />
      {/* Slider 2 */}
      <FlatList
        ref={row1FlatListRef}
        decelerationRate="fast"
        style={{ marginTop: SIZES.padding }}
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider2"
        keyExtractor={(_, index) => `Slider2_${index}`}
        data={row2Images}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item} style={{ width: 110, height: 110 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Walkthrough1;

const styles = StyleSheet.create({});