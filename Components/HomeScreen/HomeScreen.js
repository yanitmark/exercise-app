// Component taken from Week13Stack Assignment submission
// Added a main menu screen to choose between the two types of exercises menus

import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import RepsExercises from "../RepsExercises/RepsExercises";
import RepsExercisesDetails from "../RepsExercisesDetails/RepsExercisesDetails";
import DurExercises from "../DurExercises/DurExercises";
import DurExercisesDetails from "../DurExercisesDetails/DurExercisesDetails";

function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
        LET'S GET PHYSICAL! 💪
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Button
          style={{ padding: 10 }}
          title={"Repetition Exercises"}
          onPress={() => navigation.push("Repetition Exercises")}
        />
        <Button
          style={{ padding: 10 }}
          title={"Duration Exercises"}
          onPress={() => navigation.push("Duration Exercises")}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Menu} />
      <Stack.Screen name="Repetition Exercises" component={RepsExercises} />
      <Stack.Screen
        name="Repetition Exercises Details"
        component={RepsExercisesDetails}
        options={({ route }) => ({ title: route.params.item.name })}
      />
      <Stack.Screen name="Duration Exercises" component={DurExercises} />
      <Stack.Screen
        name="Duration Exercises Details"
        component={DurExercisesDetails}
        options={({ route }) => ({ title: route.params.item.name })}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    padding: 10,
    width: 400,
    height: 400,
  },
  scrollView: {
    marginHorizontal: 0,
  },
});
