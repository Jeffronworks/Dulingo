import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./App.styles";
import Header from "./src/components/Header/Header";
import questions from "./assets/data/allQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import FillerQuestion from "./src/components/FillerQuestion";

const App = () => {
  const [currentQuestionIndex, setCurrentQuesionIndex] = useState(0);
  const [currentQuestion, setCurrentQuesion] = useState(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You've completed the questions");
      setCurrentQuesionIndex(0);
    } else {
      setCurrentQuesion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuesionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuesionIndex(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over!", "Try again", [
        {
          text: "Try again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wrooong!");
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const loadedCurrentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (loadedCurrentQuestionIndex) {
      setCurrentQuesionIndex(parseInt(loadedCurrentQuestionIndex));
    }

    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
      <FillerQuestion />
      {/* {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )} */}
    </View>
  );
};

export default App;
