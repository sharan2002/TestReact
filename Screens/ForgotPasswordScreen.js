import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      /> 
      <Text style={styles.texts}> Check your Email for OTP </Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
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
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'black'
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center'

  },
  texts:{
    fontSize: 20,
    marginBottom: 20,
    color:'black'
  },
  button:{
    marginBottom:20
  }
});

export default ForgotPasswordScreen;
