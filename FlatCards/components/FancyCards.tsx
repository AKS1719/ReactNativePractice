import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={{alignItems:"center"}}>
      <View style={[styles.card, styles.cardElevated,]}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.tXAFlvtLqrGBsqdS76d4nQHaE8?rs=1&pid=ImgDetMain',
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa mahal is a palace in the city of jaipur, India. Built from
            red and pink sandstone, it is on the edge of the city palace.
          </Text>

          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:8
  },
  card: {
    width:350,
    height:360,
    borderRadius:7,
    marginVertical:12,
    // marginHorizontal:16,
  },
  cardElevated: {
    backgroundColor:"white",
    elevation:3,
    shadowOffset:{
        width:1,
        height:1
    }
  },
  cardImg: {
    height: 180,
    marginBottom:8,
    borderTopRightRadius:7,
    borderTopLeftRadius:7
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color:"black",
    fontSize:22,
    fontWeight:"bold",
    marginBottom:4
  },
  cardLabel: {
    color:"black",
    fontSize:14,
    marginBottom:6
},
  cardDescription: {
    color:"#586776",
    fontSize:12,
    marginBottom:12,
    flexShrink:1
  },
  cardFooter: {
    
    color:"black"
  },
});
