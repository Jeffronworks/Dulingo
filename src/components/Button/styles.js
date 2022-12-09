import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,

    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",

    //borders
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  disabledContainer: {
    backgroundColor: "lightgray",
    borderColor: "gray",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    // textDecorationLine: "underline", ideal but looks too close, so the hack is the next two lines below
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
});

export default styles;
