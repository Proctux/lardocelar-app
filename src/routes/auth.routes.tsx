import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import RegisterEmployee from '../pages/RegisterEmployee';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#7E2F37' },
    }}
    initialRouteName="Login"
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="RegisterEmployee" component={RegisterEmployee} />
  </Auth.Navigator>
);

export default AppRoutes;
