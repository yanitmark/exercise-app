// Component taken from Week 12 Assignment submission
// Changed styles

import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Card, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ToDoScreen() {
  let [data, setData] = useState([
    {
      key: "1",
      completed: false,
      description: "Drink 8 cups of water",
    },
  ]);

  let [newId, setNewId] = useState(data.length + 1);
  let [textInputValue, setTextInputValue] = useState("");

  let renderItem = ({ item }) => {
    return (
      <>
        <CheckBox
          onPress={() => {
            let newData = [...data];
            let selectedItem = newData.find((item2) => item.key == item2.key);
            selectedItem.completed = !selectedItem.completed;
            setData(newData);
            console.log(selectedItem);
          }}
          checked={item.completed}
          checkedColor="green"
          title={
            <Text style={item.completed ? styles.completed : undefined}>
              {item.description}
            </Text>
          }
        />
      </>
    );
  };

  function changedText(text) {
    setTextInputValue(text);
    console.log(text);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter" && textInputValue != "") {
      addToDoItem();
    }
  }

  let addToDoItem = () => {
    if (textInputValue != "") {
      setNewId(newId + 1);

      let newData = [
        {
          key: newId.toString(),
          completed: false,
          description: textInputValue,
        },
        ...data,
      ];

      setData(newData);

      setTextInputValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title>TO DO</Card.Title>

        <Card.Divider />

        <View style={styles.addContainer}>
          <Icon.Button
            onPress={() => addToDoItem()}
            style={styles.button}
            name="plus-square"
            iconStyle={{ margin: "auto" }}
          ></Icon.Button>

          <TextInput
            style={styles.inputBox}
            placeholder="New Task"
            onChangeText={changedText}
            onKeyPress={handleKeyPress}
            value={textInputValue}
          ></TextInput>
        </View>

        <Card.Divider style={styles.divider} />

        <FlatList data={data} renderItem={renderItem}></FlatList>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  addContainer: {
    flexDirection: "row",
  },
  inputBox: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    width: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    marginTop: 20,
  },
  completed: {
    color: "green",
    textDecorationLine: "line-through",
  },
});
