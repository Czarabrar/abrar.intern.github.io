import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator as createTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feedback from './FaqScreens/Feedback';
import FAQs from './FaqScreens/FAQs';
import Enquiry from './FaqScreens/Enquiry';
import { useNavigation } from '@react-navigation/native';
const Tab = createTopTabNavigator();

const TopNav = () => {
  return ( 
    <Tab.Navigator>
        <Tab.Screen name="Feedback" component={Feedback}></Tab.Screen>
        <Tab.Screen name="FAQs" component={FAQs}></Tab.Screen>
        <Tab.Screen name="Enquiry" component={Enquiry}></Tab.Screen>
    </Tab.Navigator>  
)
}
const FAQsScreen = () => {
    const navigation = useNavigation();
    const logo = require('../../images/back_logo.png')
    return(
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
        <View style={Styles.headerBlueContainer}>
        <LinearGradient colors={['#223BD8', '#0575ff', '#0F94E0']} style={Styles.linearGradientStyle}>
        <View style={Styles.logoContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('FAQs')}>
            <Image source={logo} style={[Styles.logo,{tintColor:'white'}]}></Image>
            </TouchableOpacity>
          </View>
          <View style={Styles.headingTextContainer}>
            <Text style={Styles.headingText}>Help & Support</Text>
          </View>
        </LinearGradient >
       
          
        </View>
        </View>
      <TopNav/>
      </View>
       )
  }

  const Styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%'
    },
    headerContainer:{
      width:'100%',
      height:130,
      backgroundColor:'#fff',
    
    },
    headerBlueContainer:{
      flex:1,
      
    },
    linearGradientStyle:{
      flex:1,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,
      flexDirection:'row'
    },
    logoContainer:{
      paddingTop:63,
      paddingLeft:10,
    },
    logo:{
      width:30,
      height:30,
    },
    headingTextContainer:{
      paddingTop:60,
      paddingLeft:10,
    },
    headingText:{
    fontFamily:'Poppins-SemiBold',
    color:'#fff',
    fontSize:24,
    paddingLeft:60,
    }
  })
export default FAQsScreen;