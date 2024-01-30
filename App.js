import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './App/Screens/LoginScreen';
import ForgotPasswordScreen from './App/Screens/ForgotPasswordScreen';
import SignUpScreen from './App/Screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTitle:''}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;