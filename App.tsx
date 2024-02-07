//App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './App/Screens/LoginScreen';
import ForgotPasswordScreen from './App/Screens/ForgotPasswordScreen';
import SignUpScreen from './App/Screens/SignUpScreen';
import UserScreen from './App/Screens/UserScreen';
import { Provider } from 'react-redux';
import store from './store';

import { authenticateUser } from './App/services/authentication';
const Stack = createStackNavigator();

const App: React.FC = () => { //typescript conversion
  authenticateUser('username', 'password')
    .catch(error => console.error('Authentication failed:', error.message));
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTitle:''}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
