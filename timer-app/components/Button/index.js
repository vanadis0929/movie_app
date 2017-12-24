import React from "react";
import Proptypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: Proptypes.string.isRequired,
  onPress: Proptypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80
  }
});

export default Button;
