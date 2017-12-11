import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.color}>테스트 입니다~~~~</Text>
        <Text style={styles.color}>테스트 입니다~~~~</Text>
        <Text style={styles.color}>테스트 입니다~~~~</Text>
      </View>
      
    );
  }
}

//글자관련 속성은 <text></text>에서만 먹는다 안그러면 에러남 ㅇㅅㅇ
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  color:{
    color: 'white',
    fontSize: 30
  }
});

