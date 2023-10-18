import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

// client ID
// WEB: 75374005920-s2ee2n6hj8k3kt8100qg1alo2q0can8e.apps.googleusercontent.com
// IOS: 75374005920-hd5uirc4i5fb5guebpmm6r478g2e7vkh.apps.googleusercontent.com
// ANDROID: 75374005920-k6ki0ueekq0bfambh3agh4gf0l12c5fo.apps.googleusercontent.com

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState<any>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "75374005920-hd5uirc4i5fb5guebpmm6r478g2e7vkh.apps.googleusercontent.com",
    androidClientId:
      "75374005920-k6ki0ueekq0bfambh3agh4gf0l12c5fo.apps.googleusercontent.com",
    webClientId:
      "75374005920-39n8pct8qp6if822ihjhe698v1879062.apps.googleusercontent.com",
  });

  useEffect(() => {
    handlerSignInWithGoogle();
  }, [response]);

  const handlerSignInWithGoogle = async () => {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success" && response.authentication) {
        await getUserInfo(response.authentication.accessToken);
      }

      return;
    }

    setUserInfo(user);
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return null;

    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <View style={styles.container}>
      {!userInfo ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            disabled={!request}
            title="Login with Google"
            onPress={() => {
              promptAsync();
            }}
          />
        </View>
      ) : (
        <View style={styles.card}>
          {userInfo?.picture && (
            <Image
              source={{uri: userInfo?.picture}}
              alt="profile"
              style={styles.image}
            />
          )}
          <Text style={styles.text}>Name: {userInfo?.name}</Text>
          <Text style={styles.text}>Email: {userInfo?.email}</Text>
          <Text style={styles.text}>Verified: {userInfo?.verified_email ? 'Si' : 'No'}</Text>
          
        </View>
      )}

      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem("@user");
          setUserInfo(null);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default LoginScreen;
