import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NewShowScreen from './src/screens/NewShow';
import ShowsScreen from './src/screens/Shows';
import HomeScreen from './src/screens/Home';

const TabNav = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name={'Home'} component={HomeScreen} />
        <TabNav.Screen name={'Shows'} component={ShowsScreen} />
        <TabNav.Screen name={'NewShow'} component={NewShowScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

export default App;
