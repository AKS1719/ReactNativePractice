import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

// mentioning native stack screen props home so that it knows it for home
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

// the navigation arguement come by default since it a stack of screens
const Home = ({navigation}:HomeProps) => {
  return (
	<View style={styles.container}>
	  <Text style={styles.smallText}>Home Screen</Text>
	  <Button
	  	title='Go to details'
		onPress={()=> navigation.navigate("Details",{
			productId:"89"
		})}
		// onPress={()=> navigation.push("Details",{
		// 	productId:"89"
		// })}
		/>
	</View>
  )
}

export default Home

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	},
	smallText:{
		color:"#000000"
	}
})