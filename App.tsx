import React from "react";
import {Text,View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Source/Login";
import Signup from "./Source/Signup";

const Stack = createNativeStackNavigator();
const App =()=>{
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Signup' component={Signup}/>
    </Stack.Navigator>
  </NavigationContainer>
)  
}


export default App;