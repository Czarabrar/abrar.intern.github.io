import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Enquiry = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.formView}>
        <TextInput
          placeholder='Enter your Name'
          style={Styles.inputName}
        />
        <TextInput
          placeholder='Enter your Email'
          style={Styles.inputEmail}
        />
        <View style={Styles.inputMessageContainer}>
          <Text style={Styles.inputMessagePlaceholder}>Enter your Message</Text>
          <TextInput
            placeholder=''
            multiline={true}
            style={Styles.inputMessage}
          />
        </View>
        <View style={Styles.buttoncontainer}>
          <TouchableOpacity style={Styles.touchable} onPress={() => navigation.navigate('Validate')}>
            <LinearGradient colors={['#223BD8', '#0575ff', '#0F94E0']} style={Styles.touchableGradient}>
              <Text style={Styles.btntext}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  formView: {
    padding: 10,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'grey',
    fontFamily: 'Poppins-Regular',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingLeft: 20,
  },
  inputEmail: {
    borderWidth: 1,
    borderColor: 'grey',
    fontFamily: 'Poppins-Regular',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingLeft: 20,
  },
  inputMessageContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    height: 200,
    position: 'relative',
  },
  inputMessagePlaceholder: {
    position: 'absolute',
    top: 10,
    left: 20,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  inputMessage: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  buttoncontainer: {
    width: '100%',
  },
  touchable: {
    padding: 5,
    marginHorizontal: 15,
    marginTop: 20,
    zIndex: 1,
  },
  touchableGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btntext: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Enquiry;
