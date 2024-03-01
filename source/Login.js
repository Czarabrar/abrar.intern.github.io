import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView,ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Login = () => 
{
  const navigation = useNavigation();
  const bgimage = require('../images/login_bg_bottom.png')
  return (
      <View style={Styles.mainContainer}>
        <View>
        
        <View style={Styles.headerContainer}>
          <Image  style={Styles.logo} source={require('../images/logo_intro.png')} />
       
        </View>
      <View style = {Styles.bodycontainer}>
        <View style={Styles.headerText}>
        <Text style={Styles.textstyle}> Welcome back !! {'\n'} 
        Glad to see you again
        </Text>
        </View>
        </View>

        <View style={Styles.formContainer}>
          <TextInput placeholder='Full Name' style={Styles.inputbox}></TextInput>
          <TextInput placeholder='Phone Number' style={Styles.inputbox_2}></TextInput>
        </View>

        <View style={Styles.buttoncontainer}>
         <TouchableOpacity style={Styles.touchable} onPress={()=> navigation.navigate('Validate')}>
         <LinearGradient colors={['#223BD8', '#0575ff', '#0F94E0']} style={Styles.touchableGradient}>
        <Text style={Styles.btntext}>login</Text>
        </LinearGradient>

         </TouchableOpacity>
        </View>
        </View>


        <View style={Styles.break}>
       <View style={Styles.bottom}>
        
        <ImageBackground source={bgimage} style={Styles.bgimage}></ImageBackground>
        </View>
        </View>
       
        </View>
       
  );
}
const Styles = StyleSheet.create({
  mainContainer:{
    // width:'100%',
    // height:'100%',
    backgroundColor:'#ffffff'
  },
  headerContainer:{
    width:'100%',
    height:'400',
    alignContent:'center',
    paddingLeft:130,
    paddingVertical:70,
    backgroundColor:'#3675f2'

  },
  logo:{
    width:150,
    height:150,
    resizeMode:'center'
  },
  headerText:{
    width:'100%',
    paddingTop:20,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    backgroundColor:'#ffffff'
  },
  bodycontainer:{
    backgroundColor:'#3675f2'
  },
  textstyle:{
    fontFamily:'Poppins-SemiBold',
    fontSize:20,
    color:'#142a3b',
    paddingLeft:20,
  },
  formContainer:{
    width:'100%',
    padding:20,
    // marginTop:30,
  },
  inputbox:{
    borderWidth:2,
    borderColor:'#c8cacd',
    paddingLeft:20,
    marginBottom:30,
    borderRadius:5,
    zIndex:1,
  },
  inputbox_2:{
      borderWidth:2,
      borderColor:'#c8cacd',
      paddingLeft:20,
      borderRadius:5,
      zIndex:1
  },
  buttoncontainer:{
    width:'100%',
  },
  touchable:{
   
    padding:5,
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
  break:{
  marginTop:240,

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
export default Login;