import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      setErrorMessage('Please enter your email and password');
    } else {
      // Perform sign-in logic here
      console.log('Login pressed');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/p3dw7NQp7lrAOEBnTck_fj6kYFGDFmb1p2WY2wcTiR8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzgzLzkwLzk1/LzM2MF9GXzQ4Mzkw/OTU2M19CdXB4MGsx/TnFkejJ0WFBzNzhz/ZW1IM0lvR0VqZWhn/Ri5qcGc' }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={{ color: 'grey', fontSize: 20, marginBottom: 15 }}> Enter your account here</Text>
      <TextInput
        style={styles.input}
        placeholder="📧 Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="🔒 Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => console.log('Login pressed')} style={styles.loginbutton}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity >
        <Text style={styles.sign}>Or sign in with</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://imgs.search.brave.com/vTCwcACTcg2o4L_XU9oOIfkA6VLpBo1CJ618ShAOhSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw' }}
          style={styles.imag}
        />
        <Image
          source={{ uri: 'https://imgs.search.brave.com/jJCoPasn2serH2FU-dHJQycakDfaNS7AZ2vE_CuAUNg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM1NV9vZEtOOU91/M1dCNmlIV0pURklF/bEZ0SmJUdXpKc3BZ/Ni5qcGc' }}
          style={styles.imag}
        />

      </View>
      <Text style={styles.additionalText}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>


        <Text style={styles.signUp}>Sign Up Here</Text>
      </TouchableOpacity>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -20,
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
  forgotPassword: {
    color: '#FF8C00',
    fontWeight: 'bold',
    marginTop: 10,

    fontSize: 15,
  },
  signUp: {
    color: '#FF8C00',

    fontWeight: 'bold',
    fontSize: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50


  },
  additionalText: {
    fontSize: 17,
    marginTop: 40

  },

  sign: {
    marginTop: 35,
    fontSize: 20,
    marginBottom: 7
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imag: {
    width: 30,
    height: 30,

    marginHorizontal: 20,
    marginTop: 20,

  },
});

export default LoginScreen;
