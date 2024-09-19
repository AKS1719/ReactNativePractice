import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { createElement } from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more ...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😂😂</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    container:{
        padding:8
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:4,
        margin:8

    },
    cardElevated:{
        backgroundColor:"#0ABDE3",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity:1,
        shadowRadius:2
    }
})