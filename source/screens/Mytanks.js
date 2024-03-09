import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { Component } from 'react'
//import { FlatList} from "react-native-gesture-handler";
const Mytanks = ()=> {
  const data = [
    {id:'1',title:'Tank 1'},
    {id:'2',title:'Tank 2'},
    {id:'3',title:'Tank 3'},
    {id:'4',title:'Tank 4'},
    {id:'5',title:'Tank 5'},
  ];

  const renderItem = ({item}) =>(
    <View style={Styles.item}>
      <Text style={Styles.textStyle}>{item.title}</Text>
    </View>
  );
    return (
      <View>
        <Text style={Styles.heading}>Mytanks</Text>
        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}>
          </FlatList>
      </View>
    )
  }

const Styles = StyleSheet.create({
  item: {
    backgroundColor: '#87CEEB',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textStyle:{
    fontFamily:'Poppins-SemiBold',
    color:'#0A2B3D',
    paddingTop:10,
  },
  heading:{
    fontFamily:'Poppins-Bold',
    fontSize:25,
    textAlign:'center',
    paddingTop:50,
    color:'#0A2B3D'

  }
})
export default Mytanks;