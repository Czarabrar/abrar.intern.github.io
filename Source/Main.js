import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View ,Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const Main = () => {    
    const navigation = useNavigation();
  return(
        <View style={Styles.container}>
       
        <View style = {Styles.img}>
        <Image style={Styles.imagestyle} source={require('./images/butterfly.png')} />
        </View>
        <View style={Styles.header}>
            <Text style={Styles.headertext}>
                Game on
            </Text>
        </View>
        <View style = {Styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Text style={Styles.buttontext}>lets begin</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}
const Styles = StyleSheet.create({
container:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'#e0ffcd'
},
img:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
imagestyle:{
    width:'50%',
    height:'50%',
    resizeMode:'contain'
    
},
header:{
   flex:1,
},
headertext:{
    fontSize:30,
    textAlign:'center',
    fontWeight:'700',
    color:'#43ab92',
},
button:{
    backgroundColor:'#43ab92',
    marginBottom:150,
    height:50,
    marginHorizontal:10,
    borderRadius:10,

},
buttontext:{
    textAlign:'center',
    color:'white',
    fontSize:18,
    justifyContent:'center',
    paddingTop:10,
    fontWeight:'400'
}
})
export default Main;