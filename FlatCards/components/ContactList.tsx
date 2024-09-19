import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Akshat',
      status: 'I love to code',
      imageUrl:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      uid: 2,
      name: 'Rahul',
      status: 'Learning new technologies',
      imageUrl:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      uid: 3,
      name: 'Priya',
      status: 'JavaScript enthusiast',
      imageUrl:
        'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      uid: 4,
      name: 'Ravi',
      status: 'Working on my side projects',
      imageUrl:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    // {
    //   uid: 5,
    //   name: 'Anjali',
    //   status: 'Frontend developer',
    //   imageUrl:
    //     'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
    // },
    // {
    //   uid: 6,
    //   name: 'Vikram',
    //   status: 'Enjoys solving problems',
    //   imageUrl:
    //     'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    // },
    // {
    //   uid: 7,
    //   name: 'Kavya',
    //   status: 'Always ready to learn',
    //   imageUrl:
    //     'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
    // },
    // {
    //   uid: 8,
    //   name: 'Sandeep',
    //   status: 'Full stack developer',
    //   imageUrl:
    //     'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    // },
    // {
    //   uid: 9,
    //   name: 'Neha',
    //   status: 'Love working with React',
    //   imageUrl:
    //     'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
    // },
    // {
    //   uid: 10,
    //   name: 'Aditya',
    //   status: 'Backend specialist',
    //   imageUrl:
    //     'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    // },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom:10
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems:"center",
    marginBottom:10
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight:14
  },
  userName: {
    fontSize:16,
    fontWeight:"600",
    color:"black"
  },
  userStatus: {
    fontSize:12
  },
});
