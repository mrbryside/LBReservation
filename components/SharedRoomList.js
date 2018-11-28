/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';


export default class SharedRoomList extends Component{
  render(){
    return(
      <View>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>ห้องศึกษากลุ่ม</Text>
          <TouchableOpacity>
            <Text style={styles.textMore}>เพิ่มเติม</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal='true' showsHorizontalScrollIndicator={false} style={{margin:-10,marginLeft:-8}}>
          <TouchableOpacity>
            <View style={styles.boxShadow}>
              <View style={styles.boxImage}>
                <View style={{flex:0.6}}>
                  <Image style={styles.roomImage}
                  source={require('../assets/icons/biggroupstudy01f2.jpg')} />
                </View>
                <View style={styles.cardDescription}>
                  <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                    <Text style={styles.desText}> ห้องศึกษากลุ่ม ชั้นที่ 2</Text>
                  </Text>
                  <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ : 
                    <Text style={styles.desText}> 2</Text>
                  </Text>
                  <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ : 
                    <Text style={styles.desText}> 10</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>   
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
  boldDesText :{
    fontSize:11,
    marginBottom:5,
    fontWeight:'bold',
    color:'#5C5C5C',
  },
  desText :{
    fontWeight:'300',
    color:'#5C5C5C',
  },
  boxHeader : {
    borderLeftWidth:7,
    flexDirection:'row',
    height:30,
    borderColor:'#6997B9',
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
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#919191',
    shadowOffset: { height: 0, width: 0 },
  },
  boxImage : {
    marginTop:15,
    width:145,
    height:195,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
  },
  roomImage:{
    width:'100%',
    height:'100%',
    margin:1,
  },
  cardDescription : {
    flex:0.40,
    backgroundColor:'white',
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    padding:10,
    paddingTop:15,
  }

});
