import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonpress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
      setInput("");
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        placeholder="Type in English"
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        textAlignVertical="top"
        multiline={true}
      />
      <Button text="check" onPress={onButtonpress} disabled={!input} />
    </>
  );
};

export default OpenEndedQuestion;
