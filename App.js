import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "./src/screens/Preload";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";

import UserContextProvider from "./src/contexts/UserContext";


const Stack = createStackNavigator();

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>{
        <Stack.Navigator initialRouteName="Preload">
          <Stack.Screen
          name="SignIn"
            component={SignIn} 
            options={{
              title: "SignIn",
              headerShown:false,
            }}/>
          <Stack.Screen 
          name="SignUp"
          component={SignUp}
            options={{
            title : "SignUp",
            headerShown:false,
          }}/>
          <Stack.Screen
          name="Preload"
          component={Preload}
          options={{
            title: 'Preload',
            headerShown: false,
          }}
        />
        </Stack.Navigator>
    }</NavigationContainer>
  </UserContextProvider>
  );
}; 
export default App