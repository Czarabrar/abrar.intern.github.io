import React,{useState} from 'react';
import { Image, ImageBackground,Switch, StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'


const image = require('../../images/top_bg.png');
const profilelogo = require('../../images/profile_logo.jpg')
const water_tank = require('../../images/water_tank.png');
const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const[selectedValue,setSelectedValue]= useState(null);
    const options = [
      {label:'option 1',value:'Tank1'},
      {label:'option 2',value:'Tank2'},
      {label:'option 3',value:'Tank3'},
      {label:'option 4',value:'Tank4'},
      {label:'option 5',value:'Tank5'},
    ];

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.bgImageContainer}>
      <Image source={image} style={Styles.mainImage}></Image>
      <ImageBackground
      source={image}
      style={Styles.bgImage}>
        <View style={Styles.headerWrapper}>
        <View style={Styles.headerTextWrapper}>
        <Text style={Styles.homeHeader}>
          Hi Abrar..!
        </Text>
        <Text style={Styles.homeSubHeader}>
          Save Water , Save Life
        </Text>
        </View>
        <View style={Styles.headerLogoWrapper}>
        <View style={Styles.profileLogo}>
          <Image source={profilelogo}
           style={Styles.profileLogo}>
          </Image>
        </View>
        </View>
        </View>
      </ImageBackground>
      </View>
      <View style={Styles.bodyContainer}>
        
      <SelectList 
        data={options} 
        setSelected={setSelectedValue}
        boxStyles={[{marginRight:90},{marginLeft:20},{marginTop:10},{borderWidth:1},{borderColor:'#000'}]}
        dropdownStyles={[{backgroundColor:'#ADD8E6'},{marginLeft:20},{marginRight:90}]}
        dropdownTextStyles={[{color:'#808080'},]}
    />
      <View style={Styles.waterTankimgContainer}>
        <ImageBackground 
        source={water_tank}
        style={Styles.watertankstyle}
        >
        </ImageBackground>
      </View>
      </View>

      <View style={Styles.switchContainer}>
      <Switch
      style={Styles.switchStyle}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View>
      <Text style={Styles.switchtext}>{isEnabled ? 'MOTOR is ON' : 'MOTOR is OFF'}</Text>
      </View>
      </View>
    
    </View>
  
  
    );
  };
const Styles = StyleSheet.create({
  mainContainer:{
    width:'100%',
    height:'100%'
  },
  bgImageContainer:{
    width:'100%',
    height:200,
    
  },
  mainImage:{
    width:'100%',
    height:230,
    opacity:0.5,
    position:'absolute'
  },
  bgImage:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
  },
  headerWrapper:{
    flexDirection:'row',
  },
  homeHeader:{
    fontFamily:'Poppins-Bold',
    fontSize:25,
    color:'#fff',
    paddingTop:45,
    paddingLeft:20
  },
  homeSubHeader:{
    fontFamily:'Poppins-SemiBold',
    fontSize:18,
    color:'#fff',
    paddingLeft:20
  },
  headerLogoWrapper:{
    paddingTop:50,
    paddingLeft:100,
  },
  profileLogo:{
    width:50,
    height:50,
    borderRadius:50
  },
  selectedValue: {
    fontSize: 16,
    marginTop: 20,
  },
  waterTankimgContainer:{
    width:'100%',
    height:400,
    paddingTop:20,
    paddingHorizontal:10
  },
  watertankstyle:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
  switchContainer:{
    width:'100%',
    height:300,
    paddingTop:30,
    paddingRight:30,
    
  },
  switchStyle:{
    marginRight:220,
    transform: [{ scaleX: 2.5 }, { scaleY: 3 }] ,
  },
  switchtext:{
    textAlign:'center',
    paddingTop:22,
    paddingLeft:50,
    fontFamily:'Poppins-SemiBold',
    color:'#0A2B3D'

  }
})


export default Home;
