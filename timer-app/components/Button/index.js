import React from "react";
import Proptypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome
        style={styles.Button}
        name={iconName}
        size={80}
        color="white"
      />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: Proptypes.string.isRequired,
  onPress: Proptypes.func.isRequired
};

const styles = StyleSheet.create({
  Button: {
    marginRight: 25,
    marginLeft: 25
  }
});

export default Button;
