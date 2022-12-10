import React from "react";
import { Text, Image, Pressable } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ImageOption = ({ image, text, isSelected, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
  >
    <Image
      source={{
        uri: image,
      }}
      style={styles.optionImage}
      resizeMode="contain"
    />
    <Text style={isSelected ? styles.selectedText : styles.optionText}>
      {text}
    </Text>
  </Pressable>
);

//Used to ensure that the correct type of prop is being passed down
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

// used to give default values to properties that are not required
ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
