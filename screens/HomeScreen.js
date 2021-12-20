import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }
//

  const handleGoogleSignIn = () => {
    const config = {
      iosClientId:"76815202581-qs7gb0f0es4pf9a37m5brmso9a902kkh.apps.googleusercontent.com",
      scopes: ["profil", "email"]
    }
    Google.logInAsync(config).then((result) => {
      const {type, user} = result;
      if (type == "success") {
        const {email, name} = user;
        console.log("Sign in successful.")
        setTimeout(
          () => navigation.navigate("Settings", {email, name}, 1000)
        )
      } else {
        console.log("Sign in failed.")
      }
    }).catch((error) => {console.log("error")})
  }

  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="SIGN UP"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
