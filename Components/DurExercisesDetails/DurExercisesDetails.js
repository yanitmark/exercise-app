// Component taken from Week 7 Assignment and Week13Stack Assignment submissions
// Adapted as a Functional Component State

// REFERENCE - Displaying Dynamic Elapsed Time in JavaScript: https://ralzohairi.medium.com/displaying-dynamic-elapsed-time-in-javascript-260fa0e95049

import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Button, Image } from "react-native-elements";

export default function DurExercisesDetails({ navigation, route }) {
  const { item, items } = route.params;
  const [status, setStatus] = useState(false);
  const [displayedElapsedTime, setDisplayedElapsedTime] = useState("00:00");

  //
  let nextItemIndex = items.findIndex((curItem) => curItem == item);
  nextItemIndex = nextItemIndex + 1;

  let startHandler = () => {
    switch (status) {
      case false:
        var startDate = new Date();

        var timeAndDateHandling = {
          getElapsedTime: function (startTime) {
            let endTime = new Date();
            let timeDiff = endTime.getTime() - startTime.getTime();

            timeDiff = timeDiff / 1000;

            let seconds = Math.floor(timeDiff % 60);
            let secondsAsString = seconds < 10 ? "0" + seconds : seconds;

            timeDiff = Math.floor(timeDiff / 60);

            let minutes = timeDiff % 60;
            let minutesAsString = minutes < 10 ? "0" + minutes : minutes;

            return minutesAsString + ":" + secondsAsString;
          },
        };

        var elapsedTimeIntervalRef = setInterval(() => {
          setDisplayedElapsedTime(
            timeAndDateHandling.getElapsedTime(startDate)
          );
        }, 1000);

        setStatus(true);
        console.log(status);
        break;

      case true:
        clearInterval(elapsedTimeIntervalRef);
        setDisplayedElapsedTime("00:00");
        setStatus(false);
        console.log(status);

      default:
        clearInterval(elapsedTimeIntervalRef);
        setDisplayedElapsedTime("00:00");
        setStatus(false);
        console.log(status);
        break;
    }
  };

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
            Time:
          </Text>

          <Text style={{ fontSize: 50, fontWeight: "bold", padding: 10 }}>
            {displayedElapsedTime}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Button
              style={{ padding: 10 }}
              title="Start"
              onPress={startHandler}
            ></Button>

            <Button
              style={{ padding: 10 }}
              title="Reset"
              onPress={startHandler}
            ></Button>
          </View>

          {nextItemIndex < items.length ? (
            <Button
              style={{ padding: 10 }}
              title={`Suggested Next Exercise: ${items[nextItemIndex].name}`}
              onPress={() =>
                navigation.push("Duration Exercises Details", {
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
