// Component taken from Week 7 Assignment and Week13Stack Assignment submissions
// Adapted as a Functional Component State

import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { Button } from "react-native-elements";

const durExercises = [
  {
    name: "Stretching",
    details:
      "Stretch only after warming up, or after exercise, when muscles are warm. Repeat each stretch 2 to 3 times, working both sides of the body equally. Hold each stretch for 10 to 30 seconds. Do not stretch to the point of pain. Breathe freely while stretching. Do not bounce.",
    uri:
      "https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Windmill-Stretch.gif",
    key: "1",
  },
  {
    name: "Jogging",
    details:
      "While jogging, maintain good posture, engage your core, and gaze forward. Avoid tilting your head down and slumping your shoulders. Broaden your chest, and keep it lifted as you draw your shoulders down and back. Keep your hands loose, and use a relaxed arm swing. Avoid crossing your arms in front of your body. To prevent injuries to your lower body, use a midfoot strike, and avoid hitting the ground with your heel. This allows your foot to land directly under your hip as you drive your body forward. A heel strike may cause your leg to slow down your stride and stress your knees.",
    uri:
      "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/treadmill.gif",
    key: "2",
  },
  {
    name: "Plank",
    details:
      "Begin in the plank position, face down with your forearms and toes on the floor. Engage your abdominal muscles, drawing your navel toward your spine. Hold this position for 10 seconds. Over time work up to 30, 45, or 60 seconds.",
    uri:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/plank-1457045584.gif",
    key: "3",
  },
  {
    name: "Side Plank",
    details:
      "Lie on your right side with your legs straight and feet stacked on top of each other. Place your right elbow under your right shoulder with your forearm pointing away from you and your hand balled into a fist. The pinky side of your hand should be in contact with the ground. With your neck neutral, breathe out and brace your core. Lift your hips off the mat so that you’re supporting your weight on your elbow and the side of your right foot. Your body should be in a straight line from your ankles to your head. Hold this position for the duration of the exercise. Depending on your fitness level, aim for between 15 to 60 seconds. Repeat on your left side.",
    uri:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/sideplank-1456956829.gif",
    key: "4",
  },
  {
    name: "Hip Bridge",
    details:
      "Lie face up on the floor, with your knees bent and feet flat on the ground. Keep your arms at your side with your palms down. Lift your hips off the ground until your knees, hips and shoulders form a straight line. Hold your bridged position for a couple of seconds before easing back down.",
    uri: "https://maximonline.com/wp-content/uploads/2019/11/bridge-1.gif",
    key: "5",
  },
  {
    name: "Cycling",
    details:
      "Use your whole hand to loosely grip the handlebars so your elbows are about 15 degrees. Using just your fingertips could cause a strain. Breathe from your belly and keep your back straight. This will engage your abdominal muscles. Keep your hips over the seat. Swaying from side to side can put unnecessary strain on your body. Remember, pedals move both ways. Don’t just push down on them with your feet — make sure you’re pulling up as well, which will work more than just your quads. Get the resistance just right. You don’t want to skimp on resistance — doing so makes your workout less effective and increases your chances of injury. At the same time, too much resistance can take the focus away from big muscle groups, raising the odds of hip, knee, and lower back injuries. Form should always trump resistance. Keep your abs engaged during the whole workout for a strong core.",
    uri:
      "https://i.pinimg.com/originals/7f/62/98/7f6298e683d24a182cf0062f655513b1.gif",
    key: "6",
  },
  {
    name: "Superman Hold",
    details:
      "Lay face down on a mat or flat surface, with arms outstretched. Keep your hands and arms straight throughout the exercise. Raise your hand and legs 4-5 inches off the ground. Hold for 5 seconds, then return to the starting position.",
    uri:
      "https://imagesvc.meredithcorp.io/v3/mm/gif?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2019%2F12%2F10-superwoman.gif",
    key: "7",
  },
];

export default function RepsExercises({ navigation }) {
  let [exercises, setExercises] = useState(durExercises);
  let renderButton = ({ item }) => (
    <Button
      style={{ padding: 10 }}
      title={item.name}
      onPress={() =>
        navigation.push("Duration Exercises Details", {
          item: item,
          items: exercises,
        })
      }
    ></Button>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={exercises} renderItem={renderButton}></FlatList>
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
