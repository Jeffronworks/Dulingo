import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    //border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgray",
    borderRadius: 10,

    //Spacing
    padding: 10,

    //size
    width: "48%",
    height: "48%",

    // align
    alignItems: "center",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "Bold",
    color: "black",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  selectedText: {
    fontWeight: "Bold",
    color: "#40BEF7",
  },
});

export default styles;
