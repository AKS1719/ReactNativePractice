import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={{alignItems:"center"}}>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Whats new in Javascript  21 -ES12</Text>
        </View>
        <Image
            source={{
                uri:"https://th.bing.com/th/id/OIP.WLCN2sIU7eXd_yvyfkuiUAHaEM?w=303&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            }}
            style={styles.cardImg}
        />
        <View
            style={styles.cardBody}
        >
            <Text numberOfLines={3}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore ex corporis eligendi placeat facilis deleniti et deserunt totam ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sit reprehenderit! Tempore fugit, ea repudiandae qui officiis beatae eum dignissimos?
            </Text>
        </View>
        <View
            style={styles.footerContainer}
        >
            <TouchableOpacity 
            onPress={()=> openWebsite("https://vaiaksh-music.vercel.app")}
            >
                <Text style={styles.socialLink}>
                    Read More
                </Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:"black",
        fontWeight:"bold",
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:450,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:"#EA7773",
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        color:"black",
        fontSize:16,
        fontWeight:"600"
    },
    cardImg:{
        height:250
    },
    cardBody:{
        padding:10,

    },
    footerContainer:{
        padding:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    socialLink:{
        fontSize:16,
        color:"black",
        backgroundColor:"white",
        padding:9,
        borderRadius:10
    }
});
