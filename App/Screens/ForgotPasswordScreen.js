import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/32HHIqRE4OSbjWqRQcAm5IGdN8Ei5YZMqahFqskCBP0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cml2YWN5LXNhZmV0/eS1zZWN1cml0eS1s/b2NrLWljb25fNTM4/NzYtMTQ2NDguanBn/P3NpemU9NjI2JmV4/dD1qcGc' }}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.text}>Forgot Password</Text>

      <Text style={styles.texts}> Enter the email associated with your account and we'll send an email to reset your password. </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={() => console.log('send email pressed')} style={styles.loginbutton}>
        <Text style={styles.buttonText}>SEND EMAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop:-150,
    paddingTop:100

  },
  text: {

    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  input: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  texts: {
    fontSize: 15,
    marginBottom: 50,
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,

    color: 'grey'
  },
  loginbutton: {
    marginBottom: 20,
    width: '85%',
    height: 50,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,

  },
  buttonText: {
    color: 'white'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
    borderRadius: 50,
    alignItems: 'center',
    marginTop:-150,
    paddingTop:100
  }

});

export default ForgotPasswordScreen;
