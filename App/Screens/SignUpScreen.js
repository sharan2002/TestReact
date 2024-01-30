import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      
      <Button
        title="Go to Forgot Password"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <View style={{ marginBottom: 10 }} />
      <Button
        title="Go back to Login"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight:'bold',
    color:'black'

  },
  input:{
    height: 40,
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 20

  },
  button:{
    marginBottom: 10,
  }
});

export default SignUpScreen;
