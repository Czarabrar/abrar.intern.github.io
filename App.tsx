import React from 'react';
import {Text,View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Source/Login";
import Signup from "./Source/Signup";
import Main from "./Source/Main";

const Stack = createNativeStackNavigator();
const App =()=>{
return (
  
  <NavigationContainer>

    <Stack.Navigator initialRouteName="Main">
  
       <Stack.Screen name='Login' component={Login}/>
  
      <Stack.Screen name='Signup' component={Signup}/> 
  
      <Stack.Screen name='Main' component={Main}/>
  
    </Stack.Navigator>
  
  </NavigationContainer>
);
}


export default App;