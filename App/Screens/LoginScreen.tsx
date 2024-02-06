import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {commonStyles} from '../styles/styles'
import { authenticateUser } from '../services/authentication';
interface Props {
  navigation: {
    navigate: (route: string,  params?: any) => void;
  };
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSignIn = async () => {
    if (!email || !password) {
      setErrorMessage('Please enter your email and password');
    } else {
      try {
        const userData = await authenticateUser(email, password);
        navigation.navigate('UserScreen', { userData });
      } catch (error:any) {
        console.error(error.message);
        setErrorMessage('Authentication failed. Please check your credentials.');
      }
    }
  };
  const inputBorderColor = errorMessage ? 'red' : '#FF8C00' ;
  const inputBorderWidth = errorMessage ? 2 : 1; 



  return (
    <View style={commonStyles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/xC4krvX7PjzBA5wv_1Ttk3zQHtqodJ0tkR7HRnnEujo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Uv/cHJldmlld3MvYjNm/L2luc3RhLXByb2Zp/bGUtaWNvbi1wbmct/NTY5MDM4OS5wbmc_/Zm10' }}
        style={commonStyles.image}
      />
      <Text style={commonStyles.title}>Welcome</Text>
      <Text style={{ color: 'grey', fontSize: 20, marginBottom: 15 }}> Enter your account here</Text>
      <TextInput
        style={[commonStyles.input, { borderColor: inputBorderColor, borderWidth : inputBorderWidth}]} // Apply dynamic border color

        placeholder="📧 Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[commonStyles.input, { borderColor: inputBorderColor, borderWidth : inputBorderWidth }]} // Apply dynamic border color
        placeholder="🔒 Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      

      
      {errorMessage ? <Text style={commonStyles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity onPress={handleSignIn} style={commonStyles.loginbutton}>
        <Text style={commonStyles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={commonStyles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity >
        <Text style={commonStyles.sign}>Or sign in with</Text>
      </TouchableOpacity>
      <View style={commonStyles.imageContainer}>
        <Image
          source={{ uri: 'https://imgs.search.brave.com/vTCwcACTcg2o4L_XU9oOIfkA6VLpBo1CJ618ShAOhSI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw' }}
          style={commonStyles.imag}
        />
        <Image
          source={{ uri: 'https://imgs.search.brave.com/jJCoPasn2serH2FU-dHJQycakDfaNS7AZ2vE_CuAUNg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM1NV9vZEtOOU91/M1dCNmlIV0pURklF/bEZ0SmJUdXpKc3BZ/Ni5qcGc' }}
          style={commonStyles.imag}
        />
      </View>
      <Text style={commonStyles.additionalText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={commonStyles.signUp}>Sign Up Here</Text>
      </TouchableOpacity>

    </View>
  );
};


export default LoginScreen;
