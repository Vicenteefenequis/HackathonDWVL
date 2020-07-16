import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator();
import Home from './pages/Home'
import IndetifyUser from './pages/IndetifyUser'
import Producer from './pages/RegisterNewUser/Producer'
const Routes = () => {
  return (
      <NavigationContainer>
          <AppStack.Navigator
            headerMode="none"
            screenOptions={{
              cardStyle:{
                  backgroundColor:'#f0f0f5'
              }
            }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Producer" component={Producer}/>
                <AppStack.Screen name="IndetifyUser" component={IndetifyUser}/>
          </AppStack.Navigator>
      </NavigationContainer>
  );
}

export default Routes;