/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import SharedRoomList from '../components/SharedRoomList';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import NewList from '../components/NewList'
import MyText from '../components/MyText';
import {Platform,ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';

export default class howto extends Component{
  render(){
    return(
      <View style={styles.parent}>
          <NavBar header={'วิธีใช้งาน'} 
          icon={require('../assets/icons/round-account-button-with-user-inside.png')}>
          </NavBar>
          <View style={styles.body}>
            <ScrollView>
              <View style={styles.topSearch}>
                <View style={{flex:0.9}}>
                  <Input placeHolder={'ชื่อห้อง/ความจุห้อง'} 
                  icon={require('../assets/icons/search.png')}/>
                </View>
                <View style={styles.listIcon}>
                  <TouchableOpacity>
                    <Image style={styles.icon} 
                    source={require('../assets/icons/list.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          <SafeAreaView style={styles.safeAreaBottom}>
          </SafeAreaView>
      </View>
        


    );
  }
}


const styles = StyleSheet.create({
  safeAreaTop:{
    backgroundColor:'#5AB99C',
  },
  safeAreaBottom:{
    backgroundColor:'#FAFAFA',
  },
  parent: {
    flex:1,
    backgroundColor:'white',
  },
  body:{
    flex:1,
    paddingLeft:20,
    paddingRight:0,
    backgroundColor:'#FAFAFA',
  },
  icon:{
    width:20,
    height:20,
  },
  section:{
    marginBottom:25,
  },
  divider:{
    borderBottomWidth:1.3,
    borderColor:'#e5e5e5',
    marginRight:15,
    marginBottom:20,
  },
  topSearch:{
    paddingTop:20,
    paddingRight:20,
    paddingBottom:20,
    justifyContent:"center",
    flexDirection:'row'
  },
  listIcon:{
    flex:0.1 ,
    top:8,
    flexDirection:'row',
    justifyContent:'flex-end',
  },
});
