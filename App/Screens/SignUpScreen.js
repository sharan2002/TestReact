import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/UrhWBmbCjMsbYxdWZRFm-SHYPwN1JKJUYyJH8nv8eY4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc3Lzk5LzUw/LzM2MF9GXzc3OTk1/MDY0X3JmT2hITmdI/bkV1N2lHbHd6Wmxq/OGlNUmZoenNYaUhG/LmpwZw' }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder=" 🧑 Name"

      />
      <TextInput
        style={styles.input}
        placeholder="📧 Gmail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="📱 Mobile number"
        keyboardType="phone-pad"
      />


      <TouchableOpacity onPress={() => console.log('Login pressed')} style={styles.loginbutton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ marginBottom: 10 }} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black'

  },
  input: {
    height: 50,
    width: '100%',
    color: '#FF8C00',
    borderColor: '#FF8C00',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  loginbutton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: -130,
    paddingTop: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 17
  }
});

export default SignUpScreen;
