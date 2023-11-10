import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginPage from './src/pages/loginPage';
import registerPage from './src/pages/registerPage';



export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            options={{
              headerTransparent: true,
              headerShown: false
            }}
            name='login' component={loginPage}
          />

          <Stack.Screen
            options={{
              headerTransparent: true,
              headerShown: false
            }}
            name='register' component={registerPage}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}