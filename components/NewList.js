/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';

export default class NewList extends Component{
  render(){
    return(
      <View>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>ประกาศ</Text>
          <TouchableOpacity>
            <Text style={styles.textMore}>เพิ่มเติม</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal='true' showsHorizontalScrollIndicator={false} style={{margin:-10,marginLeft:-8}}>
          <View style={styles.boxShadow}>
            <View style={styles.boxImage}>
              <View style={{flex:0.48}}>
                <Image style={styles.roomImage}
                source={require('../assets/icons/ตรวจสอบอีเมล์.jpg')} />
              </View>
              <View style={styles.cardDescription}>
                <Text numberOfLines={1} style={styles.boldDesText}>ประกาศวันทำการห้องสมุด</Text>
                <Text numberOfLines={3} style={styles.desText}>ห้องสมุดจะทำการในวันที่ 21 นี้ และปิดให้บริการทุกวันอาทิตย์ เป็นต้นไป</Text>
              </View>
              <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity style={{position:'absolute'}}>
                  <View style={{justifyContent:'center',alignItems:'center',width:45,height:20,backgroundColor:'#5AB99C',borderTopLeftRadius:5}}>
                    <Text style={styles.tagText}>อ่านต่อ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginLeft:20}}></View>
          
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  boxHeader : {
    borderLeftWidth:7,
    flexDirection:'row',
    height:30,
    borderColor:'#5AB99C',
    paddingLeft:8,
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:20,
  },
  textHeader : {
    fontSize:17,
    fontWeight:'bold',
    color:'#5C5C5C',
  },
  textMore : {
    fontSize:11,
    color:'#5C5C5C',
  },
  tagText :{
    fontSize:10,
    color:'white'
  },
  boxShadow:{
    margin:10,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#919191',
    shadowOffset: { height: 0, width: 0 },
  },
  boxImage : {
    flexDirection:'row',
    marginTop:15,
    width:240,
    height:115,
    borderRadius:7,
    overflow: 'hidden',
  },
  roomImage:{
    width:'100%',
    height:'100%',
    margin:1,
  },
  cardDescription : {
    flex:0.52,
    backgroundColor:'white',
    borderBottomRightRadius:5,
    padding:15,
  },
  boldDesText :{
    fontSize:12,
    fontWeight:'bold',
    color:'#5C5C5C',
  },
  desText :{
    fontSize:10,
    marginTop:8,
    fontWeight:'300',
    color:'#5C5C5C',
  },

});