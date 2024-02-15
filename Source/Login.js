import { useNavigation ,useRoute} from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Snackbar from 'react-native-snackbar';


const Login = () => {


const navigate = useNavigation();
const bgimage = require('./images/background.jpg')
const logo = require('./images/logo2.png')
const [email,setEmail]=useState('');
const [password,setPassword] = useState('');
 const constemail = "abc@gmail.com";
 const constpasswd = 12345;

const[emptyemail,setEmptyemail] = useState(false);
const[emptypaswd,setEmptypaswd] = useState(false);

const handleemailChange = (text) =>{
setEmail(text);
setEmptyemail(false);
}
const handlepasswordChange = (text) =>{
  setPassword(text);
  setEmptypaswd(false);
}
const buttonfunc =() => {

  if((email===constemail)&&(password===constpasswd)){
    setEmptyemail(false);
    setEmptypaswd(false);
  Snackbar.show({
    text:'Welcome back',
    duration:Snackbar.LENGTH_SHORT,
    backgroundColor:'rgba(0,255,100,0.5)',
    action:{
      text:'user',
      textColor:'grey',
  }
  });
}
else if(email||password===''){
  setEmptyemail(true);
  
  setEmptypaswd(true);
  Snackbar.show({
  text:'Wrong user id/password',
  duration:Snackbar.LENGTH_SHORT,
  backgroundColor:'rgba(237, 40, 40, 0.8)',
  action:{
    text:'user',
    textColor:'grey',
}

});
}


else
{
setEmptyemail(true);
setEmptypaswd(true);
  Snackbar.show({
    text:'enter user id/password',
    duration:Snackbar.LENGTH_SHORT,
    backgroundColor:'rgba(40, 40, 40, 0.3)',
    action:{
           text:'user',
           textColor:'white',
  }
  });
}

}
return (
  <View style={Styles.Container}>
  <View style={Styles.ImageContainer}>
    <ImageBackground 
        source={bgimage}
        resizeMode="stretch"
        style={Styles.img}>
        </ImageBackground>
        </View>
    <View style={Styles.Header}>
      <Image
      source={logo}
      alt='logo'
      style={Styles.Imagestyle}/>
      <Text style={Styles.HeaderText}> Welcome Back </Text>
    </View>

  <View style={Styles.form}>
    <View style={Styles.formcontainer}>
    <View style={Styles.inputbox}>
    <TextInput
     style={[Styles.Textinput,emptyemail&&Styles.empty]}
    placeholder='Email'
    placeholderTextColor={'#637A9F'}
    onChangeText={handleemailChange}
    value={email}
    />

    {emptyemail && <Text style={Styles.emptystyle}>email cant be empty</Text>}
    </View>
    <View >
    <TextInput
    style={[Styles.Textinput,emptypaswd&&Styles.empty]}
    secureTextEntry
    placeholder='password'
    placeholderTextColor={'#637A9F'}
    onChangeText={handlepasswordChange} 
    value={password}
    />
    {emptypaswd && <Text style ={Styles.emptystyle}>Password can be empty </Text>}
    </View>
    <TouchableOpacity ><Text style={Styles.textlink}>forgot password?</Text></TouchableOpacity>
    </View>
    <View style={Styles.buttoncontainer}>
      <TouchableOpacity style={Styles.button}>
        <Text onPress = {buttonfunc}
        style={Styles.btntext}>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
  <View style={Styles.linecontainer}>
  <View style={Styles.line} />
  <View>
    <Text style={{width: 50, textAlign: 'center', fontSize:20, color:'#034078'}}>or</Text>
  </View>
  <View style={Styles.line} />
</View>

<View style={Styles.logocontainer}>
<View style={Styles.logo}>
  <Image 
  source={require('./images/google_img.png')}
  style={Styles.logostyle}></Image>
</View>
<View style={Styles.logo}>
  <Image source={require('./images/facebook_img.png')}
  style={Styles.logostyle}></Image>
</View>

</View>
<View style={Styles.signup}>
  <Text style={{color:'#ffffaf'}}>
    Dont have an account ? <Text style={{textDecorationLine:'underline' ,color:'#ffffff', fontSize:15}}onPress={()=>navigate.push('Signup')}>SignUp</Text>
  </Text>
</View>

  </View>
);
}

const Styles=StyleSheet.create({
empty:{
  borderWidth:1,
borderColor:'red',
},
emptystyle:{
  color:'red',
  marginTop:-40,
  padding:10,
},
ImageContainer:{
position:'absolute',
top:0,
bottom:0,
left:0,
right:0,
},
Container:{
  flex:1,
  alignItems:'center',
  fontFamily: 'monospace',
  },
img:{
  flex:1,
  flexDirection:'column',
},
Header:{
  backgroundColor:'rgba(0,0,0,0)',
},
Imagestyle:{
  marginTop:50,
  marginBottom:-10,
  width:200,
  height:150,
},
HeaderText:{
fontSize:30,
color:'#ffafaf',
fontWeight:'bold',
textAlign:'center',
},
form:{
width:'100%',
alignItems:'center',
justifyContent:'center',
marginTop:40,
paddingHorizontal:20,
},
elevation:{
shadowColor:'#52006A',
elevation:20.
},

formcontainer:{
width:'100%',
paddingBottom:20,
},
inputbox:{

},
Textinput:{
  borderWidth:2,
  borderColor:'#034078',
  marginBottom:30,
  borderRadius:8,
  paddingLeft:30,
  fontSize:20,
  color:'black',
  backgroundColor:'#ECECEC',
  fontWeight:'500',
  zIndex:2,
},
textlink:{
textAlign:'right',
textDecorationLine:'underline',
color:'#034078',
marginTop:-20,
},
buttoncontainer:{
flex:1,
width:'100%',

},
button:{
  backgroundColor:'#034078',
  height:50,
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center'
},
btntext:{
color:'white',
fontSize:20,
fontWeight:'800',
},
linecontainer:{
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical:80,
  paddingHorizontal:20
},
line:{
  flex: 1,
  height: 1,
  backgroundColor: '#034078'
},
logocontainer:{
flexDirection:'row',
alignContent:'space-around'
},
logo:{
backgroundColor:'#034078',
padding:10,
borderRadius:10,
marginLeft:40,
marginRight:40,
borderRadius:50,
},
logostyle:{
  width:40,
  height:40,
  padding:10,
  
},
signup:{
  marginTop:30,
  color:'white'
}
})
export default Login;
