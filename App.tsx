import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './source/Intro';
import Login from './source/Login';
import Validate from './source/Validate';
import Home from './source/screens/Home';


import BottomDrawer from './source/BottomDrawer';

const Stack = createNativeStackNavigator();
const StackApp = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
    <Stack.Screen name='Intro'   component={Intro}  options={{headerShown: false}}/>
    <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}/>
    <Stack.Screen name='Validate' component={Validate}  options={{headerShown: false}}/>
    <Stack.Screen name='Home' component={BottomDrawer}  options={{headerShown: false}}/>
    </Stack.Navigator>
  
    )
}

const App = () => {
  return(
<NavigationContainer>
  <StackApp/>
    
  </NavigationContainer>
  )
}

export default App;