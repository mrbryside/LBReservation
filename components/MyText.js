import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, TextInput,View, Image, SafeAreaView, TouchableOpacity} from 'react-native';


export default class MyText extends Component{
  render(){
    return(
        <Text style={[styles.text, this.props.style]} numberOfLines={this.props.line}>
            {this.props.text}
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontFamily:'Kanit-Regular',
  }


});

