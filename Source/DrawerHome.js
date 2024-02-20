import React from "react";
import {View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Sample from "./Sample";
const DrawerHome = () => {
    
    const drawer = createDrawerNavigator();
    return (
     
        // <drawer.Navigator>
        //     <drawer.Screen name="Sample" component={Sample}/>
        // </drawer.Navigator>
       <drawer.Navigator initialRouteName="Sample">
        <drawer.Screen name="Sample"
        component={Sample}>

        </drawer.Screen>
       </drawer.Navigator>

    )
}
export default DrawerHome;