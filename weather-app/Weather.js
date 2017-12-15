import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo"; //배경그라디언트
import { MaterialCommunityIcons } from "@expo/vector-icons"; //날씨아이콘  (vector-icons 라는 패키지에서 가져옴)
import PropTypes from "prop-types";

//날씨 컴포넌트
// export default class Weather extends Component {
//   render() {
//     return (
//       <LinearGradient colors={["#6db3f2", "#1e69de"]} style={styles.container}>
//         <View style={styles.upper}>
//           {/* 날씨아이콘 불러옴 */}
//           <Ionicons color="white" size={144} name="weather-rainy" />
//           <Text style={styles.temp}>35℃</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>title</Text>
//           <Text style={styles.subtitle}>msg</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

//날씨별 케이스 선언
const weatherCases = {
  Rain: {
    colors: ["#00c6fb", "#005bea"],
    title: "비",
    subtitle: "밖에 비온다 주룩주룩",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["#fef253", "#ff7300"],
    title: "맑음",
    subtitle: "맑디 맑은 날씨입니다 ㅇㅅㅇ",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ecbc", "#007adf"],
    title: "천둥번개",
    subtitle: "벼락맞습니다 ㅇㅅㅇ 집에있으세요",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#d7d2cc", "#304352"],
    title: "흐린날씨",
    subtitle: "구름이 많아서 흐려염",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7de2fc", "#b9b6e5"],
    title: "눈",
    subtitle: "하늘에서 하얀 쓰레기가 내립니다",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89f7fe", "#66a6ff"],
    title: "이슬비가 보슬보슬",
    subtitle: "올거면 확 오든지...",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#66a6ff", "#7de2fc"],
    title: "안개",
    subtitle: "안개빛~ 조명은 ~하....흐트러진 내몸을 감ㅆ...",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        {/* 날씨아이콘 불러옴 */}
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 35,
    backgroundColor: "transparent"
  },
  wIcon: {
    //textShadowColor: '#000',
    //textShadowOffset: {width: 1, height: 1},
    //textShadowRadius: 3
  },
  title: {
    fontSize: 35,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "300",
    marginBottom: 15
  },
  subtitle: {
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "300",
    paddingLeft: 20
  },
  temp: {
    marginTop: 10,
    fontSize: 40,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "300"
  }
});
