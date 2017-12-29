import React from "react";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity } from "react-native";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity>
      <FontAwesome name={iconName} size={100} color="white" />
    </TouchableOpacity>
  );
}

export default Button;
