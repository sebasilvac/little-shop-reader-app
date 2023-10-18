import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MainScreen, LoginScreen } from "./src/screens";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="Home" component={MainScreen} options={{ title: 'Inicio' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
