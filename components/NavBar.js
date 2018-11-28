/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class NavBar extends Component{
  render(){
    return(
      <LinearGradient colors={['#6278A5','#475474']}>
        <SafeAreaView>
          <View style={styles.navBar}>
            <View style={{flex:1}}>
              <TouchableOpacity>
                <Image style={styles.icon} source={this.props.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.header}>{this.props.header}</Text>
            <View style={{flex:1}}>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  navBar: {
    height:60,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingTop:15,
    
  },
  icon:{
    marginBottom:0,
    marginLeft:30,
    width:23,
    height:23,
  },
  header:{
    color:'white',
    fontSize:19,
  },


});
