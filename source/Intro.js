import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';

const Intro =() => {
  const bgimage = require('../images/bgimage.png')
  const navigation = useNavigation();
  const changeScreen = () => {
    navigation.navigate('Login');
  }
  return (
   
  <View style={Styles.mainContainer}>
    
    <View style={Styles.headerContainer}>
      <Text style={Styles.headerText}>Smart water {'\n'}Management System</Text>
    </View>
    <View style={Styles.logoContainer}>
      <TouchableOpacity onPress={changeScreen}>
        <Image  style={Styles.logo} source={require('../images/logo_intro.png')} />
        </TouchableOpacity>
    </View>
    <View style={Styles.bottomImageContainer}>
    <ImageBackground source={bgimage} resizeMode="cover" style={Styles.bottombgimage}>
      <Text style={Styles.bottomText}> POWERED BY : ABRAR AHMED </Text>
    </ImageBackground>
    </View>
  </View>
  );
};

const Styles = StyleSheet.create({
  mainContainer:{
    width:'100%',
    height:'100%',
    backgroundColor:'ffffff'
  },
  headerContainer:{
    width:'100%',
    height:'400',
  },
  headerText:{
    textAlign:'center',
    paddingTop:120,
    fontFamily:'Poppins-SemiBold',
    fontSize:25,
    color:'#142a3b'
  },
  logoContainer:{
    width:'100%',
    height:'400'
  },
  logo:{
    width:140,
    height:180,
    resizeMode:'contain',
    paddingHorizontal:200,
    marginTop:80
  },
  bottomImageContainer:{
    width:'100%',
    height:'40%',
    marginTop:100,
  },
  bottombgimage:{
    width:'100%',
    height:'100%',
  },
  bottomText:{
    textAlign:'center',
    paddingTop:180,
    fontFamily:'Poppins-Regular',
    color:'#fff',
    fontWeight:'600'
  }
  
})
export default Intro;



