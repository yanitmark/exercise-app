// Component taken from Week 7 Assignment and Week13Stack Assignment submissions
// Adapted as a Functional Component State

import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Button, Image } from "react-native-elements";

export default function RepsExercisesDetails({ navigation, route }) {
  const { item, items } = route.params;
  const [reps, setReps] = useState(0);
  let nextItemIndex = items.findIndex((curItem) => curItem == item);
  nextItemIndex = nextItemIndex + 1;
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.image}
          ></Image>

          <Text style={{ padding: 10 }}>{item.details}</Text>

          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
            Reps Completed:
          </Text>

          <Text style={{ fontSize: 50, fontWeight: "bold", padding: 10 }}>
            {reps}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Button
              style={{ padding: 10 }}
              title="- 1"
              onPress={() => setReps((prevValue) => prevValue - 1)}
            ></Button>
            <Button
              style={{ padding: 10 }}
              title="+ 1"
              onPress={() => setReps((prevValue) => prevValue + 1)}
            ></Button>

            <Button
              style={{ padding: 10 }}
              title="Reset"
              onPress={() => setReps(0)}
            ></Button>
          </View>

          {nextItemIndex < items.length ? (
            <Button
              style={{ padding: 10 }}
              title={`Suggested Next Exercise: ${items[nextItemIndex].name}`}
              onPress={() =>
                navigation.push("Repetition Exercises Details", {
                  item: items[nextItemIndex],
                  items: items,
                })
              }
            ></Button>
          ) : undefined}

          <Button
            style={{ padding: 10 }}
            title="Home"
            onPress={() => navigation.navigate("Home")}
          ></Button>
        </View>
      </ScrollView>
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
  image: {
    padding: 10,
    width: 400,
    height: 400,
  },
  scrollView: {
    marginHorizontal: 0,
  },
});
