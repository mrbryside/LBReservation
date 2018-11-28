/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, TextInput,View, Image, SafeAreaView, TouchableOpacity} from 'react-native';


export default class Input extends Component{
  render(){
    return(
      <View>
        <Image style={styles.icon} source={this.props.icon} />
        <TextInput style={styles.input} placeholder={this.props.placeHolder}></TextInput>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  input:{
    borderRadius:100,
    paddingLeft:35,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    height:35,
  },
  icon:{
    position:'absolute',
    width:13,
    height:13,
    top:11,
    left:15,
  }

});
