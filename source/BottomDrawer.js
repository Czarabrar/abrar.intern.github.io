import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Mytanks from './screens/Mytanks'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Favourite from './screens/Favourite';
import Notification from './screens/Notification';
import FAQs from './screens/FAQsScreen';

const tab = createBottomTabNavigator();
const BottomDrawer = () =>{
  
    return (
     <tab.Navigator
     screenOptions={{
      activeTintColor:'blue',
      inactiveTintColor:'gray'
     }}>
            <tab.Screen 
            name='Homescreen'
            component={Home} 
            options={{
              headerShown:false,
              tabBarLabel:'Home',  
              tabBarIcon:({color,focused})=>(  
                  <Icon name={focused ?"home" :"home-outline" }color={color} size={25}/> 
              ) 
            }}>
            </tab.Screen>
             <tab.Screen name='MytanksScreen'component={Mytanks}
             options={{
              headerShown:false,
              tabBarLabel:'Mytanks',  
              tabBarIcon:({color,focused})=>(  
                  <Icon name={focused?"grid":"grid-outline"} color={color} size={25}/> 
              ) 
            }}
             ></tab.Screen>
             <tab.Screen name='FavouriteScreen'component={Favourite}
             options={{
              headerShown:false,
              tabBarLabel:'Favourite',  
              tabBarIcon:({color,focused})=>(  
                  <Icon name={focused?"heart-sharp":"heart-outline"} color={color} size={25}/> 
              ) 
            }}
             ></tab.Screen>
            <tab.Screen
            name='NotificationScreen'
            component={Notification}
            options={{
              headerShown:false,
              tabBarLabel:'Notification',
              tabBarIcon:({color,focused}) => (
                <Icon name={focused?"notifications-sharp":"notifications-outline"} color={color} size={25}/>
              )
            }}
            ></tab.Screen>
            <tab.Screen
            name='FAQsHomeScreen'
            component={FAQs}
            options={{
              headerShown:false,
              tabBarLabel:'FAQs',
              tabBarIcon:({color,focused}) => (
                <Icon name={focused?"help-circle":"help-circle-outline"} color={color} size={25}/>
              )
            }}></tab.Screen>
     </tab.Navigator>
    )
  }


const styles = StyleSheet.create({})
export default BottomDrawer;