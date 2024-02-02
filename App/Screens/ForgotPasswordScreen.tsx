import React from 'react';
import { View, Text, TextInput,TouchableOpacity, Image, ImageStyle, TextStyle } from 'react-native';
import {commonStyles} from '../styles/styles'
const ForgotPasswordScreen:React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Image
        source={{ uri: 'https://imgs.search.brave.com/32HHIqRE4OSbjWqRQcAm5IGdN8Ei5YZMqahFqskCBP0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cml2YWN5LXNhZmV0/eS1zZWN1cml0eS1s/b2NrLWljb25fNTM4/NzYtMTQ2NDguanBn/P3NpemU9NjI2JmV4/dD1qcGc' }}
        style={commonStyles.image as ImageStyle}
        resizeMode='contain'
      />
      <Text style={commonStyles.text}>Forgot Password</Text>
      
      <Text style={commonStyles.texts}> Enter the email associated with your account and we'll send an email to reset your password. </Text>
      <TextInput
        style={commonStyles.input as TextStyle}
        placeholder="📧 Email"
        keyboardType="email-address"
      />
      
      <TouchableOpacity onPress={() => console.log('send email pressed')} style={commonStyles.loginbutton}>
        <Text style={commonStyles.buttonText}>SEND EMAIL</Text>
      </TouchableOpacity>
      </View>
  );
};


export default ForgotPasswordScreen;
