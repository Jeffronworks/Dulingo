import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightgrey",
    height: 20,
    borderRadius: 15,
    flex: 1,
  },
  fg: {
    backgroundColor: "#FAC800",
    flex: 1,
    borderRadius: 15,
  },
  highlight: {
    backgroundColor: "#FAD131",
    width: "90%",
    height: 5,
    alginSelf: "center",
    marginTop: 5,
    borderRadius: 15,
  },
});

export default ProgressBar;
