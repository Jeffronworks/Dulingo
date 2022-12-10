import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderCOlor: "lightgrey",
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#ebebeb",
    // alignSelf: "stretch",

    padding: 10,

    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  },
});

export default styles;
