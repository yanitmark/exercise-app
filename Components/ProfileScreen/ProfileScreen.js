// Component taken from Development 4 Assignment submission
// Adapted to implement Application State with useReducer (loggedIn)

import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../ApplicationState";
import { StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";
import { Card, Button } from "react-native-elements";

export default function ProfileScreen() {
  let [state, dispatch] = useReducer(reducer, initialState);
  let [username, setUsername] = useState(undefined);
  let [password, setPassword] = useState(undefined);
  let [userInputError, setUserInputError] = useState(undefined);
  let [passInputError, setPassInputError] = useState(undefined);
  let [errorMessage, setErrorMessage] = useState(undefined);

  function userChangedText(text) {
    setUsername(text);
    console.log(text);
  }
  function passChangedText(text) {
    setPassword(text);
    console.log(text);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter" && password != "") {
      doLogin();
    }
  }

  let doLogin = () => {
    if (
      (username == undefined && password == undefined) ||
      (username == "" && password == "")
    ) {
      setUserInputError(true);
      setPassInputError(true);
      setErrorMessage("Please enter a username and password");
    } else if (username == "" || username == undefined) {
      setUserInputError(true);
      setPassInputError(false);
      setErrorMessage("Please enter a username.");
    } else if (password == "" || password == undefined) {
      setPassInputError(true);
      setUserInputError(false);
      setErrorMessage("Please enter a password.");
    } else {
      if (password == "Ch@rge!") {
        dispatch({ type: "login" });
        setUsername(username);
        console.log("Logged In!");
      } else {
        setErrorMessage("Wrong password! Try again.");
        setPassInputError(true);
        setUserInputError(false);
        console.log("Wrong Password!");
      }
    }
  };

  let doLogout = () => {
    dispatch({ type: "logout" });
    setUsername("");
    setPassword("");
    setUserInputError(undefined);
    setPassInputError(undefined);
    setErrorMessage(undefined);
    console.log("Logged Out!");
    console.log("Logged Out!");
  };

  return (
    <SafeAreaView style={styles.container}>
      {!state.loggedIn ? (
        <Card style={styles.loggedOut}>
          <Text style={styles.title}>LOG IN</Text>

          <Card.Divider />
          <Text style={styles.label}>Username:</Text>
          <TextInput
            onKeyPress={handleKeyPress}
            onChangeText={userChangedText}
            style={[
              styles.textInput,
              userInputError ? styles.invalidInput : undefined,
            ]}
            value={username}
          ></TextInput>

          <Text style={styles.label}>Password:</Text>
          <TextInput
            onKeyPress={handleKeyPress}
            onChangeText={passChangedText}
            style={[
              styles.textInput,
              passInputError ? styles.invalidInput : undefined,
            ]}
            secureTextEntry={true}
            value={password}
            placeholder="Hint: Ch@rge!"
          ></TextInput>
          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <Button onPress={doLogin} title="Login"></Button>
        </Card>
      ) : (
        <View style={styles.loggedIn}>
          <Text style={styles.welcome}>Welcome {username}!</Text>
          <Text>This is your profile</Text>
          <Button style={{ padding: 20 }} onPress={doLogout} title="Log Out" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  invalidInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorMessage: {
    height: 15,
    textAlign: "center",
    color: "red",
    fontSize: 15,
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 20,
  },
  textInput: {
    width: 300,
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 40,
    textAlign: "center",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  loggedIn: {
    width: 2000,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B4D6D3",
  },
  loggedOut: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
