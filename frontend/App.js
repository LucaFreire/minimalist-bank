import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginPage from './src/pages/loginPage';
import registerPage from './src/pages/registerPage';
import { View } from 'react-native'


export default function App() {
  const Stack = createStackNavigator();

  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          
            options={{
              headerTransparent: true,
              headerShown: true
            }}
            name='login' component={loginPage}
          />

          <Stack.Screen
            options={{
              headerTransparent: true,
              headerShown: true
            }}
            name='register' component={registerPage}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}