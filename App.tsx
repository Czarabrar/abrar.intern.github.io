import React from 'react';
import {Text,View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import Login from "./Source/Login";
import Signup from "./Source/Signup";
import Main from "./Source/Main";
import DrawerHome from './Source/DrawerHome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';

const Stackapp = () =>{
  const Stack = createNativeStackNavigator();

return (
  <Stack.Navigator initialRouteName="Main">
  
  <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>

 <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/> 

 <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>

 <Stack.Screen name='DrawerHome' component={DrawerHome} options={{headerShown:false}}/> 
</Stack.Navigator>

)

}
const App =()=>{
 
 
return (

  <NavigationContainer>
 
 <Stackapp/>
 
  </NavigationContainer>
    );
}


export default App;