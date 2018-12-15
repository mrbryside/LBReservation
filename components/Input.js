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
    paddingLeft:45,
    backgroundColor: 'rgba(52, 52, 52, 0.05)',
    height:35,
    fontFamily:'Kanit-Regular',
  },
  icon:{
    position:'absolute',
    width:15,
    height:15,
    top:10,
    left:15,
  }

});
