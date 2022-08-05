import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Welcome, Walkthrough, AuthMain1 } from "./screens";
import AuthMain2 from "./screens/Authentication/AuthMain2";

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Welcome"}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="AuthMain1" component={AuthMain1} />
        <Stack.Screen name="AuthMain2" component={AuthMain2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
