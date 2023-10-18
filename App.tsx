import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./src/screens";
import { StatusBar } from "expo-status-bar";



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainScreen} options={{ title: 'Inicio' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
