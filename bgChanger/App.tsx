import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [randomBackground, setRandomBackground ] = useState("#ffffff")


  const generateColor = ()=>{
    const char= "0123456879abcdef"
    let res = "#"
    for(let i = 1 ; i<=6 ;i++){
      res += char.charAt(Math.round(Math.random() * 15))
    }
    setRandomBackground(res)
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container,{backgroundColor:randomBackground}]} >
        <TouchableOpacity
          onPress={generateColor}
        >
          <View style={[styles.actionBtn]} >
            <Text
              style={[styles.actionBtnTxt]}
            >Press me </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  actionBtn:{
    borderRadius:40,
    backgroundColor:"#6a1b40",
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionBtnTxt:{
    fontSize:24,
    color:"white",
    textTransform:"uppercase"
  }
});
