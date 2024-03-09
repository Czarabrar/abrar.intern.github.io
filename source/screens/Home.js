import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Switch,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import tankdata from '../Tanks.json';
import RNPickerSelect from 'react-native-picker-select';


//images 
const image = require('../../images/top_bg.png');
const profilelogo = require('../../images/profile_logo.jpg');
const water_tank = require('../../images/water_tank.png');


//main function
const HomeContainer = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [waterTankStyle, setWaterTankStyle] = useState(Styles.watertankstyle);

  const options = [
    { label: 'Tank 1', value: 'Tank1' },
    { label: 'Tank 2', value: 'Tank2' },
    { label: 'Tank 3', value: 'Tank3' },
    { label: 'Tank 4', value: 'Tank4' },
    { label: 'Tank 5', value: 'Tank5' },
  ];

  const navoption = tankdata.Tanks.map(tank => ({
    // label: tank.name,
    value: tank.id,
  }));

  const dropdownfunc = (value) => {
    setSelectedValue(value);
    let updatedStyle = {};
    switch (value) {
      case 'Tank1':
        updatedStyle = Styles.waterTankImgTank1;
        break;
      case 'Tank2':
        updatedStyle = Styles.waterTankimgTank2;
        break;
      case 'Tank3':
        updatedStyle = Styles.waterTankimgTank3;
        break;
      case 'Tank4':
        updatedStyle = Styles.waterTankimgTank4;
        break;
      case 'Tank5':
        updatedStyle = Styles.waterTankimgTank5;
        break;
      default:
        updatedStyle = Styles.watertankstyle;
        break;
    }
    setWaterTankStyle(updatedStyle);
  };

  const navigateToMyTanks = () => {
    if (selectedValue) {
      const selectedUserData = tankdata.Tanks.find(
        (tank) => tank.id.toString() === selectedValue
      );
      navigation.navigate('HomeCardsScreen', { tank: selectedUserData });
    }
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.bgImageContainer}>
        <Image source={image} style={Styles.mainImage} />
        <ImageBackground source={image} style={Styles.bgImage}>
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerTextWrapper}>
              <Text style={Styles.homeHeader}>Hi Abrar..!</Text>
              <Text style={Styles.homeSubHeader}>Save Water, Save Life</Text>
            </View>
            <View style={Styles.headerLogoWrapper}>
              <View style={Styles.profileLogo}>
                <Image source={profilelogo} style={Styles.profileLogo} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={Styles.bodyContainer}>
        <View style={Styles.pickercontainer}>
          <RNPickerSelect
            placeholder={{
              label: 'Select a Tank...',
              value: null,
              color: '#387ADF',
            }}
            items={options}
            onValueChange={dropdownfunc}
            style={Styles.boxStyles}
          />
        </View>
        <View style={Styles.waterTankimgContainer}>
          <Image
            source={water_tank}
            style={[Styles.watertankstyle, waterTankStyle]}
          />
        </View>

        <View style={Styles.switchContainer}>
          <SwipeButton
            onSwipeSuccess={() => setIsEnabled(true)}
            onSwipeFail={() => setIsEnabled(false)}
            containerStyles={{
              backgroundColor: '#FFB5DA',
              width: 250,
              paddingVertical: 2,
              paddingLeft: 3,
            }}
            railStyles={{
              backgroundColor: '#add8e6',
              maxWidth: 240,
              opacity: 0.8,
            }}
            thumbIconStyles={{
              borderWidth: 1,
              borderRadius: 100,
            }}
            thumbIconBackgroundColor='#FF3EA5'
            railBackgroundColor='#FFB5DA'
            title='   Slide to turn on >>'
            titleStyles={Styles.slidertextstyle}
          />
          <View>
            <View style={Styles.textstyle}>
              <Text style={isEnabled ? Styles.switchtext : Styles.switchtext2}>
                {isEnabled ? 'MOTOR is ON' : 'MOTOR is OFF'}
              </Text>
              <View style={Styles.linkingtext}>
                {isEnabled && (
                  <TouchableOpacity onPress={navigateToMyTanks}>
                    <Text style={Styles.linkText}>Click here for tank details</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  bgImageContainer: {
    width: '100%',
    height: 200,
  },
  mainImage: {
    width: '100%',
    height: 230,
    opacity: 0.6,
    position: 'absolute',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  homeHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#ffffff',
    paddingTop: 45,
    paddingLeft: 20,
    zIndex: 3,
  },
  homeSubHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
    paddingLeft: 20,
  },
  headerLogoWrapper: {
    paddingTop: 50,
    paddingLeft: 100,
  },
  profileLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  pickercontainer: {
    borderWidth: 1,
    borderColor: '#124076',
    borderRadius: 10,
    width: 300,
    marginLeft: 55,
  },
  boxStyles: {},
  waterTankimgContainer: {
    width: '100%',
    height: 400,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  waterTankImgTank1: {
    tintColor: 'red',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  waterTankimgTank2: {
    tintColor: 'blue',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  waterTankimgTank3: {
    tintColor: 'purple',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  waterTankimgTank4: {
    tintColor: '#009933',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  waterTankimgTank5: {
    tintColor: '#993300',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  watertankstyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    tintColor: 'black',
  },
  switchContainer: {
    width: '100%',
    paddingTop: 10,
    alignItems: 'center',
  },
  slidertextstyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    paddingLeft: 25,
  },
  textstyle: {
    width: '100%',
    padding: 0,
    margin: 0,
  },
  switchtext: {
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
    color: 'blue',
    textAlign: 'center',
  },
  switchtext2: {
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
    color: 'red',
    textAlign: 'center',
  },
  linkingtext: {
    padding: 0,
    margin: 0,
  },
  linkText: {
    color: '#11009E',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

const Home = () => {
  return (
    <View>
      <HomeContainer />
    </View>
  );
};

export default Home;
