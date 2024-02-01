import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/styles';
const SignUpScreen = () => {
  return (
    <View style={commonStyles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/UrhWBmbCjMsbYxdWZRFm-SHYPwN1JKJUYyJH8nv8eY4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc3Lzk5LzUw/LzM2MF9GXzc3OTk1/MDY0X3JmT2hITmdI/bkV1N2lHbHd6Wmxq/OGlNUmZoenNYaUhG/LmpwZw' }}
        style={commonStyles.image}
      />

      <TextInput
        style={commonStyles.input}
        placeholder=" 🧑 Name"

      />
      <TextInput
        style={commonStyles.input}
        placeholder="📧 Gmail"
        keyboardType="email-address"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="📱 Mobile number"
        keyboardType="phone-pad"
      />


      <TouchableOpacity onPress={() => console.log('Login pressed')} style={commonStyles.loginbutton}>
        <Text style={commonStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ marginBottom: 10 }} />

    </View>
  );
};



export default SignUpScreen;
