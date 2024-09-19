import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cards, styles.card2]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.cards, styles.card3]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.cards, styles.card3]}>
                    <Text>Green</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:8
    },
    cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        padding:3,
        margin:8
    },
    card1:{
        backgroundColor:"crimson"
    },
    card2:{
        backgroundColor:'lightseagreen'
    },
    card3:{
        backgroundColor:"seagreen"
    }

});

export default FlatCard;
