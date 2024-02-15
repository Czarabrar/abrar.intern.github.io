import React,{useState} from "react";
import{StyleSheet, Text,TextInput,View,TouchableOpacity,ToastAndroid} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";



const Signup = () => {

    const [formdata,setFormData]=useState({
        name:'',
        email:'',
        
        password:'',
        confirmPassword:'',
    });
    const[age,setAge] = useState('');
    const ages = Array.from({length:100},(_,i) =>String(i+1));
    // const navigation = useNavigation();
    const showToast = () =>{
        ToastAndroid.show('data are entered',ToastAndroid.CENTER,
        ToastAndroid.SHORT );
    }
    const [emptyerror,setEmptyError] = useState({
        nameError:false,
        emailError:false,
        
        passwordError:false,
        confirmPasswordError:false,
    })

    const handleChange = (field,value) =>{
    setFormData(formdata => ({
        ...formdata,
        [field]:value,
      }))
      setEmptyError(false);
    }

    const handleAgeChange =(age)=>{
    setAge(age);
    }
   
    const handleSubmit = () => {
    if(((formdata.name===''||formdata.email===''||formdata.password===''||formdata.confirmPassword==='')&&age==='')){
            setEmptyError(true);
            
        } 
    else
    {
       setEmptyError(false);
       showToast()

      console.log('form data:',{...formdata,age:age});
    //    console.log('age:',age);
       
    }
};

    return (
        <View style={Styles.MainContainer}>
            <View style={[Styles.Container,Styles.elevation]}>
                <View style={Styles.formbox}>
                    <View style={Styles.inputbox}>
                        <TextInput style={[Styles.Textinput,emptyerror&&Styles.Error]}
                        placeholder="Enter your name"
                        
                        onChangeText={value=>handleChange('name',value)}
                        
                        placeholderTextColor={'#B2BABB'}>
                            </TextInput>
                    </View>
                    
                    <View style={Styles.inputbox}>
                        <TextInput style={[Styles.Textinput,emptyerror&&Styles.Error]}
                        placeholder="Enter your Email"
                        
                        onChangeText={value=>handleChange('email',value)}
                        placeholderTextColor={'#B2BABB'}>
                            </TextInput>
                    </View>
                    <Picker selectedValue={age} value={age}
                    onValueChange={handleAgeChange}>
                        <Picker.Item label="select age" value={null} />
                        {ages.map((age) => (
                            <Picker.Item key={age} label={age}  value={age}/>
                        ))}
                        
                        </Picker>
                    <View style={Styles.inputbox}>
                        <TextInput style={[Styles.Textinput,emptyerror&&Styles.Error]}
                        placeholder="Enter your Password"
                        onChangeText={value=>handleChange('password',value)}
                        secureTextEntry
                        placeholderTextColor={'#B2BABB'}>
                            </TextInput>
                    </View>
                    <View style={Styles.inputbox}>
                        <TextInput style={[Styles.Textinput,emptyerror&&Styles.Error]}
                        placeholder="Confirm your Password"
                        secureTextEntry
                        onChangeText={value=>handleChange('confirmPassword',value)}
                        placeholderTextColor={'#B2BABB'}>
                            </TextInput>
                    </View>
                    <View style={Styles.buttoncontainer}>
                        <TouchableOpacity style={Styles.button}>
                        <Text
                        style={Styles.btntext}
                        onPress={handleSubmit}>SignUp</Text>
                        </TouchableOpacity>
                  </View>
                </View>
            </View>
        </View>

    );
}

const Styles = StyleSheet.create({
    MainContainer:{
      flex:1,
      alignItems:'center'  ,
      justifyContent:'center',
      backgroundColor:'#FAE5D3',
    },
    Container:{
        width:'97%',
    
        backgroundColor:'#ffffff',
        paddingHorizontal:30,
        borderRadius:20,
        position:'absolute',
    },
    formbox:{
       
        marginVertical:40,
    },
    elevation: {  
        shadowColor: '#52006A',  
        elevation: 20,  
      },  
      Textinput:{
        borderWidth:1,
        borderColor:'#000000',
        marginVertical:20,
        borderRadius:5,
        paddingLeft:20,
      },
      Error:{
        borderWidth:1,
        borderColor:'red',
      },
      buttoncontainer:{
        flex:1,
        width:'100%',
        marginTop:20,
        },
        button:{
          backgroundColor:'#EDBB99',
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
      
})
export default Signup;