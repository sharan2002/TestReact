// UserScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  route: {
    params: {
      userData: {
        id: number;
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        gender: string;
        image: string;
        token: string;
      };
    };
  };
}

const UserScreen: React.FC<Props> = ({ route }) => {
  const { userData } = route.params;
  

  return (
    
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/PzngAPChR2G1EghyNpeb6l57-C-wwF0B_VXbrqZORFw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE5LzI2LzQ2/LzM2MF9GXzYxOTI2/NDY4MF94MlBCZEdM/RjU0c0ZlN2tUQnRB/dlpuUHlYZ3ZhUncw/WS5qcGc' }}
        style={styles.image}
      />
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.userInfo}>
        <Text style={styles.label}>User Name:</Text>
        <Text style={styles.info}>{userData.username}</Text>
      </View>
      

      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{userData.email}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.info}>{userData.firstName}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.info}>{userData.lastName}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.info}>{userData.id}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.info}>{userData.gender}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:'black'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 10,
    color:'white'
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color:'white',
    fontSize:20,
  },
  info: {
    fontSize:20,
    flex: 1,
    color:'white'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
});

export default UserScreen;
