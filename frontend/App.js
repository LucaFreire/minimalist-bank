import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from "react-native";
import loginPage from './src/pages/loginPage';
import registerPage from './src/pages/registerPage';
import homePage from './src/pages/homePage';
import historicPage from './src/pages/historicPage';
import transferPage from './src/pages/transferPage';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <View style={styles.main}>
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
              name='home' component={homePage}
            />
            
            <Stack.Screen
              options={{
                headerTransparent: true,
                headerShown: false
              }}
              name='register' component={registerPage}
            />

            <Stack.Screen
              options={{
                headerTransparent: true,
                headerShown: false
              }}
              name='historic' component={historicPage}
            />

            <Stack.Screen
              options={{
                headerTransparent: true,
                headerShown: false
              }}
              name='transfer' component={transferPage}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%"
  }
});
