import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

export default class App extends React.Component {
  state = {
    isLoaded: true
  };

  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? ( <Weather /> ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>날씨정보 불러오는중...</Text>
          </View>
        )}
      </View>
      
    );
  }
}

//글자관련 속성은 <text></text>에서만 먹는다 안그러면 에러남 ㅇㅅㅇ
//style은 단축속성 적용되지 않음.
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fdf6aa'
  },
  loadingText:{
    fontSize: 35,
    textAlign: 'center',
    paddingBottom: 100
  }
});

