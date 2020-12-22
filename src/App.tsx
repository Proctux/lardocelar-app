import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes/app.routes';

export const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#7E2F37" />
    <View style={{ flex: 1, backgroundColor: '#7E2F37' }}>
      <AppRoutes />
    </View>
  </NavigationContainer>
);

export default App;
