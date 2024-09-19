import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Button
} from 'react-native'

function AppPro() : JSX.Element  {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello
                </Text>
            </View>
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container :{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    whiteText :{
        color:'#FFFFFF',
    },
    darkText :{
        color:'#000000',
    }
})


export default AppPro;