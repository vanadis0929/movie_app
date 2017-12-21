import React from "react";
import Proptypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: Proptypes.string.isRequired,
  onPress: Proptypes.func.isRequired
};
export default Button;


//리덕스 스토어에 올라갈 내용 (카운트여부, 카운팅시간, 카운팅하고있는 시간)

isCounting: true  | false,
counterDuration: 1500,
elapsedTime: 0,



