import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";

export default class Weather extends Component{
    render(){
        return(
        <LinearGradient 
            colors={['#6db3f2', '#1e69de']}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Text>아이콘 ㅇㅅㅇ</Text>
                <Text>기온표시</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>title</Text>
                <Text style={styles.msgArea}>msg</Text>
            </View>
        </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 25
    },
    wIcon:{
        textAlign: 'center',
        alignSelf: 'flex-start'   
    },
    title:{ 
        fontSize: 35, 
        color: '#ffffff'
    },
    msgArea:{ 
        fontSize: 35, 
        color: '#ffffff'
    }    
});