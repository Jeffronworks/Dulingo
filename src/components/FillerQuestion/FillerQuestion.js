import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import myImage from "../../../assets/images/sttingDownImage.jpg";

const FillerQuestion = (props) => {
  const [answer, setAnswer] = useState("");
  const data = ["standing", "sitting", "walking"];

  const [options, setOptionValue] = useState(data);

  const onPress = (choice, index) => {
    setAnswer(choice);
    data[index] = "";
    setOptionValue(data);
  };

  const onPressBox = () => {
    setAnswer("");
    setOptionValue(data);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.fillerHeader}>Complete the Sentence</Text>
      <Image style={styles.sittingImage} source={myImage} />
      <View style={styles.questionContainer}>
        <Text style={styles.textBox}>This people are </Text>
        <Pressable style={styles.inputBox} onPress={onPressBox}>
          <Text style={styles.textBox}>{answer}</Text>
        </Pressable>
      </View>
      <View style={styles.answersContainer}>
        {options.map((option, index) => {
          return (
            <Pressable
              style={styles.answerBox}
              key={index}
              onPress={() => onPress(option, index)}
            >
              <Text style={styles.textBox}>{option ? option : ""}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default FillerQuestion;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 5,
    marginRight: "auto",
  },
  fillerHeader: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    flexWrap: "wrap",
  },
  sittingImage: {
    height: 300,
    width: 370,
    resizeMode: "contain",
  },
  questionContainer: {
    flexDirection: "row",
    marginTop: 20,
    // justifyContent: "flex-start",
  },
  answerBox: {
    // backgroundColor: "red",
    borderRadius: 13,
    borderColor: "black",
    border: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    margin: 5,
    textDecorationLine: "underline",
  },
  textBox: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    padding: 5,
    // margin: 5,
  },

  answersContainer: {
    flexDirection: "row",
    margin: 50,
  },
  inputBox: {
    backgroundColor: "lightgrey",
    backgroundColor: "#ebebeb",
    // alignSelf: "stretch",

    padding: 10,
    flex: 1,

    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
});
