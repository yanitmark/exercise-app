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

const repExercises = [
  {
    name: "Push Ups",
    details:
      "Get down on all fours, placing your hands slightly wider than your shoulders. Straighten your arms and legs. Lower your body until your chest nearly touches the floor. Pause, then push yourself back up. Repeat.",
    uri: "https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-small.gif",
    key: "1",
  },
  {
    name: "Chin Ups",
    details:
      "Grab the pullup bar with your palms up. Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar Lower yourself until your arms are straight.",
    uri:
      "https://i.pinimg.com/originals/ad/a0/10/ada010429f352a18c952f91a43ec0ef6.gif",
    key: "2",
  },
  {
    name: "Bicycle Crunches",
    details:
      "Lie down on your back. Bend your knees and plant your feet on the floor, hip-width apart. Place your arms behind your head, pointing your elbows outward. Brace your abs. Lift your knees to 90 degrees and raise your upper body. This is your starting position. Exhale and rotate your trunk, moving your right elbow and left knee toward each other. Simultaneously straighten your right leg. Pause. Inhale and return to starting position. Exhale. Move your left elbow to your right knee and extend your left leg. Pause, and repeat.",
    uri:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/bicycle-1472058017.gif",
    key: "3",
  },
  {
    name: "Sit Ups",
    details:
      "Lie down on your back, keep your knees bent and your back and feet flat on the mat. Slowly lift your torso and sit up. Return to the starting position by rolling down one vertebrae at a time. Repeat the exercise until the set is complete.",
    uri: "https://i.imgur.com/UJAnRhJ.gif",
    key: "4",
  },
  {
    name: "Squats",
    details:
      "Stand with feet a little wider than hip width, toes facing front. Drive your hips back—bending at the knees and ankles and pressing your knees slightly open—as you siit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back. Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle.",
    uri:
      "https://workout-gifs.s3.amazonaws.com/routines/4a00134c-4af8-43f3-88ad-5f564484d0dc.gif",
    key: "5",
  },
  {
    name: "Jumping Jacks",
    details:
      "Sand upright with your legs together, arms at your sides. Bend your knees slightly, and jump into the air. As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head. Jump back to the starting position. Repeat.",
    uri:
      "https://workout-gifs.s3.amazonaws.com/routines/ced45fed-b6fb-4a04-b275-95d90a25623b.gif",
    key: "6",
  },
  {
    name: "Lunges",
    details:
      "Start by standing up tall. Step forward with one foot until your leg reaches a 90-degree angle. Lift your front lunging leg to return to the starting position. Repeat for the other leg.",
    uri:
      "https://workout-gifs.s3.amazonaws.com/routines/988a5870-1ff2-4f7e-88ab-aa6887c367bd.gif",
    key: "7",
  },
  {
    name: "Burpees",
    details:
      "Stand straight with your feet shoulder-width apart. Squat and place your hands in front of your feet. Jump back until your legs are fully extended and your body is in plank position. Do a push up, jump forward and then push through the heels to return to the starting position.",
    uri:
      "https://workout-gifs.s3.amazonaws.com/routines/326bb3f6-eecb-40bb-abd6-81fb0f652be2.gif",
    key: "8",
  },
];

export default function RepsExercises({ navigation }) {
  let [exercises, setExercises] = useState(repExercises);
  let renderButton = ({ item }) => (
    <Button
      style={{ padding: 10 }}
      title={item.name}
      onPress={() =>
        navigation.push("Repetition Exercises Details", {
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
