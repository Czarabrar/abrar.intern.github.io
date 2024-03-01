import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native'
import Login from './Login'
import Home from './screens/Home'
import LinearGradient from 'react-native-linear-gradient'
import icon from 'react-native-vector-icons'
const Validate = () => {
    const navigation = useNavigation();
const logo = require('../images/back_logo.png')
const bgimage = require('../images/login_bg_bottom.png')
    return (
      <View style={Styles.mainContainer}>


        <View style={Styles.headerContainer}>
            <View style={Styles.logoContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Image source={logo} style={Styles.logo}></Image>
            </TouchableOpacity>
            </View>
            <View style={Styles.logoTextContainer}>
                <Text style={Styles.logoText}>OTP Verification</Text>
            </View>
        </View>

        <View style={Styles.body}>
            <View style={Styles.bodyTextContainer}>
                <Text style={Styles.bodyText}>
                    We have sent the verification code to {'\n'} your mobile number +91 1234567890
                </Text>
            </View>
            <View style={Styles.anchorTextContainer}>
                <Text style={Styles.anchorText}> Change Number ? </Text>
            </View>
        </View>
        <View style={Styles.inputContainer}>
            <TextInput style={Styles.inputBox}></TextInput>
            <TextInput style={Styles.inputBox}></TextInput>
            <TextInput style={Styles.inputBox}></TextInput>
            <TextInput style={Styles.inputBox}></TextInput>
        </View>
       

        <View style={Styles.buttoncontainer}>
         <TouchableOpacity style={Styles.touchable} onPress={()=>navigation.navigate('Home')}>
         <LinearGradient colors={['#223BD8', '#0575ff', '#0F94E0']} style={Styles.touchableGradient}>
        <Text style={Styles.btntext}>login</Text>
        </LinearGradient>

         </TouchableOpacity>
        </View>
        <View style={Styles.timerContainer}>
            <Text style={Styles.timerText}>Resent Code in 00:30 sec</Text>
        </View>
      
        <View style={Styles.break}>
       <View style={Styles.bottom}>
        
        <ImageBackground source={bgimage} style={Styles.bgimage}></ImageBackground>
        </View>
        </View>
       






      </View>
    )
  }
  const Styles=StyleSheet.create({
    mainContainer:{
    width:'100%',
    height:'100%',
    },
    headerContainer:{
       
        flexDirection:'row',
        paddingTop:60,
    },
    logoContainer:{
        paddingTop:12,
        paddingLeft:10,
    },
    logo:{
        width:40,
        height:40,
    },
    logoTextContainer:{
        padding:15,
    },
    logoText:{
        paddingLeft:30,
        fontFamily:'Poppins-SemiBold',
        fontSize:25,
        color:'#142a3b',
        fontWeight:'500'
    },
    body:{
        paddding:10,
    },
    bodyTextContainer:{
        paddingTop:10,
        paddingHorizontal:45,
    },
    bodyText:{
        fontFamily:'Poppins-Regular',
        fontSize:16,
    },
    anchorTextContainer:{
        paddingTop:30,
    },
    anchorText:{
        textAlign:'center',
        color:'#0096FF',
        fontSize:18,
        fontFamily:'Poppins-Regular',
    },
    inputContainer:{
        paddingTop:30,
        paddingLeft:50,
        flexDirection:'row',
        
    },
    inputBox:{
        borderWidth:1,
        borderColor:'#c8cacd',
        width:50,
        margin:10,
    },
    buttoncontainer:{
        width:'100%',
      },
      touchable:{
       
        padding:15,
        marginHorizontal:15,
        marginTop:20,
        zIndex:1,
      },
      touchableGradient:{
        padding:10,
        borderRadius:40
      },
      btntext:{
        textAlign:'center',
        color:'#fff',
        fontFamily:'Poppins-SemiBold'
      },
      timerContainer:{
        padding:5,
      },
      timerText:{
        textAlign:'center',
        fontSize:15,
        fontFamily:'Poppins-SemiBold',
        color:'#0F1035'
      },
      break:{
        marginTop:370,
      
        },
        bottom:{
          position:'absolute',
          bottom:0,
          left:0,
        },
        bgimage:{
          width:450,
          height:490,
          resizeMode:'cover'
        }
  })
export default Validate;
