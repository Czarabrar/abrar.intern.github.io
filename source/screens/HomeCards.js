import { StyleSheet, Text, View ,Image, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const logo = require('../../images/back_logo.png')




const HomeCards = ({route})=>{
  const {tank} = route.params;
  const navigation=useNavigation();
    return (
      <View style={StyleSheet.mainContainer}>
        <View style={Styles.headerContainer}>
          <View style={Styles.headerLogo}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image source={logo} style={Styles.logoStyle}></Image>
          </TouchableOpacity>
          </View>
          <View  style={Styles.headerTextContainer}>
            <Text style={Styles.headerText}>Flow monitor</Text>
          </View>
        </View>

        <View style={Styles.topBodyContainer}>
        <View style={Styles.leftBoxWrapper}>
        
        <View style={Styles.leftBox1}>
        <View style={Styles.imageHolder}>
          <Image source={require('../../images/speedometer.png')}  styles={Styles.SpeedLogoStyle} ></Image>
        </View>
        <View style={Styles.textHolder}>
          <Text style={Styles.bigText}>
              {tank.phlevelvalue}
          </Text>
          <Text style={Styles.smallText}>
            pH level of water
          </Text>
        </View>
        </View>
        <View style={Styles.leftBox2}>
        <View style={Styles.imageHolder}>
          <Image source={require('../../images/thermometer.png')}  styles={Styles.SpeedLogoStyle} ></Image>
        </View>
        <View style={Styles.textHolder}>
          <Text style={Styles.bigText}>
          {tank.tdslevelvalue}
          </Text>
          <Text style={Styles.smallText}>
            TDS level of water
          </Text>
        </View>
        </View>
        </View>
       
        <View style={Styles.rightBoxWrapper}>
       
        <View style={Styles.rightLogoWrapper}>
        <Image source={require('../../images/water_drop.png')} style={Styles.waterLogoStyle}></Image>
        </View>
        <View style={Styles.righttextWrapper}>
        <Text style={Styles.bigText}>
        {tank.flowlevelvalue}
        </Text>
          <Text style={Styles.smallText}>
            Flow level of water
          </Text>

        </View>

        <View style={Styles.rightbgHolder}>
       <Image source={require('../../images/bgimage.png')} style={Styles.rightbgImage}></Image>
        </View>
        </View>
        </View>

        <View style={Styles.bottomBodyContainer}>
        <View style={Styles.horizontalBox}>
          <View style={Styles.horizontalBox1}>
        <View style={Styles.HorizontalLogoWrapper}>
          <Image source={require('../../images/clock.png')} style={Styles.horizontalLogoStyle}>
          </Image>
         </View>         
         <View style={Styles.logoTextWrapper}>
          <Text  style={[Styles.bigText,{paddingLeft:20}]}>
            {tank.timevalue}
          </Text>
          <Text style={[Styles.smallText,{paddingLeft:20}]}>
            Expected Time to Fill
          </Text>
         </View>

        </View>
        <View style={Styles.horizontalBox2}>
        <Image source={require('../../images/side_image.png')} style={Styles.sideImage}></Image>

        </View>
        </View>

        <View style={Styles.bottomVerticalContainer}>

        <View style={[Styles.leftBox1,{marginHorizontal:20,marginTop:10,paddingHorizontal:10}]}>
        <View style={Styles.imageHolder}>
          <Image source={require('../../images/mini_tank.png')}  styles={Styles.SpeedLogoStyle} ></Image>
        </View>
        <View style={Styles.textHolder}>
          <Text style={Styles.bigText}>
             {tank.capacityvalue}
          </Text>
          <Text style={Styles.smallText}>
            Tank Capacity
          </Text>
        </View>
        </View>
        <View style={[Styles.leftBox1,{marginHorizontal:10,marginTop:10,paddingHorizontal:10,}]}>
        <View style={Styles.DropimageHolder}>
          <Image source={require('../../images/water_drop1.png')}  styles={Styles.DropLogoStyle} ></Image>
        </View>
        <View style={Styles.textHolder}>
          <Text style={Styles.bigText}>
              {tank.consumptionvalue}
          </Text>
          <Text style={Styles.smallText}>
            consumtion value
          </Text>
        </View>
        </View>

        </View>

        </View>
        </View>
        
     
    )
  }

const Styles = StyleSheet.create({
  mainContainer:{
    width:'100%',
    height:'100%',
   
  },
  headerContainer:{
   flexDirection:'row',
   paddingTop:40,
   paddingLeft:20,
   backgroundColor:'#c1e1ec'
  },
  headerLogo:{
    paddingTop:5,
    
  },
  logoStyle:{
    width:30,
    height:30,
    tintColor:'#0A2B3D'
  },
  headerTextContainer:{
    paddingLeft:70,
  },
  headerText:{
    color:'#0A2B3D',
    fontFamily:'Poppins-SemiBold',
    fontSize:25,
   
  },
  topBodyContainer:{
    flexDirection:'row',
    backgroundColor:'#c1e1ec'
  },
  leftBoxWrapper:{
    marginTop:20,
    marginLeft:20,
    backgroundColor:'#c1e1ec'
  },
  leftBox1:{
    borderRadius:15,
    backgroundColor:'#fff',
    marginBottom:30,
  },
  leftBox2:{
    borderRadius:15,
    backgroundColor:'#fff'
  },
  imageHolder:{
    paddingLeft:10,
    paddingTop:10
  },
  textHolder:{
    paddingLeft:5,

  },
  bigText:{
    fontFamily:'Poppins-SemiBold',
    color:'#0A2B3D',
    fontSize:18,
    paddingHorizontal:5,
  
  },
  smallText:{
    fontFamily:'Poppins-SemiBold',
    paddingRight:30,
    paddingHorizontal:5,
    marginBottom:18,
    color:'grey'
  },
  rightBoxWrapper:{
    backgroundColor:'#fff',
    marginHorizontal:23,
    borderRadius:15,
    marginTop:20,
    marginBottom:10,
  },
  rightLogoWrapper:{
  },
  waterLogoStyle:{
    height:200,
   resizeMode:'cover',
  },
  righttextWrapper:{
    marginTop:-100,
    paddingLeft:10,
  },
  rightbgHolder:{
   
  },
  rightbgImage:{
    width:'100%',
    height:140,
    resizeMode:'cover',
     borderBottomLeftRadius:15,
     borderBottomRightRadius:15,
    paddingBottom:10,
  },
  bottomBodyContainer:{
    backgroundColor:'#c1e1ec'
  },
  horizontalBox:{
    flexDirection:'row',
    backgroundColor:'#c1e1ec',
    marginBottom:15,
  },
  horizontalBox1:{
    backgroundColor:'#fff',
    marginLeft:20, 
    marginTop:15,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
  },
  HorizontalLogoWrapper:{
    paddingTop:15,
    paddingLeft:20,
  },
  horizontalLogoStyle:{
    marginBottom:10,
  },
  horizontalBox2:{ 
    marginTop:15,
    backgroundColor:'#fff',
    borderTopRightRadius:15,
    borderBottomRightRadius:15
    // marginRight:10,

  },
  sideImage:{
    width:180,
    height:155,
    resizeMode:"stretch",
    borderTopRightRadius:15,
    borderBottomRightRadius:15
    },
    bottomVerticalContainer:{
      flexDirection:'row',
      // paddingHorizontal:20,
    },
    DropimageHolder:{
      width:50,
      height:20,
      resizeMode:'center'
    },
    DropLogoStyle:{
     width:10,
     height:10,

    }


})
export default HomeCards