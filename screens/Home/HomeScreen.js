import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { TextButton, HeroBanner, Footer } from "../../components";
import { constants } from "../../constants";
import sanityClient from "../../lib/client";
import Products from "../../components/Products";

const HomeScreen = ({ navigation }) => {
  const [bannr, setbannr] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "banner"]{
      ...,
    }`
      )
      .then((data) => {
        setbannr(data);
      });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products"]{
      ...,
    }`
      )
      .then((data) => {
        setProduct(data);
      });
  }, []);

  console.log(product);

  return (
    <SafeAreaView>
      <View style={{ padding: 15 }}>
        {/* HeroBanner */}
        {bannr &&
          bannr.map((bannerr) => (
            <HeroBanner key={bannerr._id} bannerr={bannerr} />
          ))}
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold", color: "skyblue" }}>
            Best selling products
          </Text>
          <Text style={{ paddingTop: 5, color: "gray" }}>
            Speaker of a; variations
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingTop: 20,
            flexDirection: "row",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {product &&
            product.map((productx) => (
              <Products key={productx._id} productx={productx} />
            ))}
        </ScrollView>
        {/* Footer */}
        <Footer footerBanner={bannr && bannr[0]} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
