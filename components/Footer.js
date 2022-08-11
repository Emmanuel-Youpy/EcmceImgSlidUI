// import React from "react";
// import { View, Text } from "react-native";

// import sanityClient from "../lib/client";

// import imageUrlBuilder from "@sanity/image-url";
// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

// const Footer = ({ footerBanner }) => {
//   return (
//     <View
//       style={{
//         padding: 20,
//         backgroundColor: "red",
//         borderRadius: 15,
//         position: "relative",
//         height: 250,
//         color: "white",
//         width: "100%",
//         marginTop: 120,
//       }}
//     >
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           paddingTop: 20,
//         }}
//       >
//         <View syle={{}}>
//           <Text style={{ color: "white" }}>{footerBanner.discount}</Text>
//           <Text style={{ fontWeight: "900", fontSize: 30, color: "white" }}>
//             {footerBanner.largeText1}
//           </Text>
//           <Text style={{ fontWeight: "900", fontSize: 30, color: "white" }}>
//             {footerBanner.largeText2}
//           </Text>
//           <Text style={{ color: "white" }}>{footerBanner.saleTime}</Text>
//         </View>
//         <View>
//           <Text style={{ color: "white" }}>{footerBanner.smallText}</Text>
//           <Text style={{ fontWeight: "900", fontSize: 30, color: "white" }}>
//             {footerBanner.midText}
//           </Text>
//           <Text style={{ color: "white" }}>{footerBanner.desc}</Text>
//         </View>
//         {/* Image */}
//       </View>
//     </View>
//   );
// };

// export default Footer;
