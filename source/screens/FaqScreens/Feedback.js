import React,{useState} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native';

const Feedback = () => {
  const emojiArray = ['😀', '😂', '😊', '🎉', '🔥', '❤️'];
  const [selectedView, setSelectedView] = useState(null);
  const handleViewPress = (viewIndex) => {
    setSelectedView(viewIndex);
  }

return (
<View style={styles.container}>
  <Text style={styles.headerText}>Give Feedback</Text>
<View style={styles.emojiContainer}>
{emojiArray.map((emoji, index) => (
        <Text key={index} style={styles.emoji}>
          {emoji}
        </Text>
      ))}
      </View>
      <View style={styles.bodycontainer}>
        <Text style={styles.bodyText}>Tell us what can be improved</Text>
        <View style={styles.viewWrapper}>
        <View style={[styles.item, selectedView === 0 && styles.selectedItem]}>
        <TouchableOpacity onPress={() => handleViewPress(0)}>
          <Text style={styles.textStyle}>overall service</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.item, selectedView === 1 && styles.selectedItem]}>
        <TouchableOpacity onPress={() => handleViewPress(1)}>
          <Text style={styles.textStyle}>Customer Support</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.item, selectedView === 2 && styles.selectedItem]}>
        <TouchableOpacity onPress={() => handleViewPress(2)}>
          <Text style={styles.textStyle}>Services</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.item, selectedView === 3 && styles.selectedItem]}>
        <TouchableOpacity onPress={() => handleViewPress(3)}>
          <Text style={styles.textStyle}>Installation</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.item, selectedView === 4 && styles.selectedItem]}>
        <TouchableOpacity onPress={() => handleViewPress(4)}>
          <Text style={styles.textStyle}>Delivery</Text>
        </TouchableOpacity>
      </View>
      </View>
     <KeyboardAvoidingView>
      
        <TextInput style={styles.inputStyle}
        placeholder='Other Suggestion '
        multiline={true}>
        </TextInput>
        </KeyboardAvoidingView>
      </View>
      </View>
  
)
  }

  const styles= StyleSheet.create({
    container:{ 
      width:'100%',
      height:'100%'
    },
    headerText:{
      fontFamily:'Poppins-SemiBold',
      fontSize:25,
      color:'#0A2B3D',
      paddingLeft:10,
      paddingTop:10,
    },
    emojiContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    emoji: {
      fontSize: 24,
      margin: 5,
    },
    bodyText:{
      color:'#0A2B3D',
      fontFamily:'Poppins-Regular',
      fontSize:18,
      paddingLeft:10,
      paddingTop:10
    },
    viewWrapper:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
    item: {
      padding: 10,
      margin: 5,
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
    },
    selectedItem: {
      borderWidth:1,
      backgroundColor: '#c1e1ec', // Change color as needed
    },
    textStyle:{
      fontFamily:'Poppins-Regular',
      color:'#0A2B3D',
    },
    inputStyle:{
      borderWidth:1,
      borderColor:'grey',
      marginTop:15,
      marginHorizontal:15,
      height:150,
  
    }

  })
export default Feedback;