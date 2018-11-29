/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import MyText from './MyText';

export default class NewList extends Component {
  render() {
    return (
      <View>
        <View style={styles.boxHeader}>
        <MyText style={styles.textHeader} text={'ประกาศ'}></MyText>
          <TouchableOpacity>
            <MyText style={styles.textMore} text={'เพิ่มเติม'}></MyText>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal='true' showsHorizontalScrollIndicator={false} style={{ margin: -10, marginLeft: -8 }}>
          <View style={styles.boxShadow}>
            <TouchableOpacity>
              <View style={styles.boxImage}>
                <View style={{ flex: 0.48 }}>
                  <Image style={styles.roomImage}
                    source={require('../assets/icons/ตรวจสอบอีเมล์.jpg')} />
                </View>
                <View style={styles.cardDescription}>
                  <MyText line={1} style={styles.boldDesText} text={'ประกาศวันทำการห้องสมุด'}></MyText>
                  <MyText line={3} style={styles.desText} text={'ห้องสมุดจะทำการในวันที่ 21 นี้ และปิดให้บริการทุกวันอาทิตย์ เป็นต้นไป'}></MyText>
                </View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                  <TouchableOpacity style={{ position: 'absolute' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 45, height: 20, backgroundColor: '#5AB99C', borderTopLeftRadius: 5 }}>
                      <MyText style={styles.tagText} text={'อ่านต่อ'}></MyText>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 20 }}></View>

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxHeader: {
    borderLeftWidth: 7,
    flexDirection: 'row',
    height: 30,
    borderColor: '#6997B9',
    paddingLeft: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  textHeader : {
    fontSize:17,
    fontWeight:'400',
    color:'#5C5C5C',
  },
  textMore : {
    fontSize:11,
    color:'#5C5C5C',
    fontWeight:'400',
  },
  tagText: {
    fontSize: 10,
    color: 'white'
  },
  boxShadow: {
    margin: 10,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#919191',
    shadowOffset: { height: 0, width: 0 },
  },
  boxImage: {
    flexDirection: 'row',
    marginTop: 15,
    width: 240,
    height: 115,
    borderRadius: 7,
    overflow: 'hidden',
  },
  roomImage: {
    width: '100%',
    height: '100%',
    margin: 1,
  },
  cardDescription: {
    flex: 0.52,
    backgroundColor: 'white',
    borderBottomRightRadius: 5,
    padding: 15,
  },
  boldDesText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5C5C5C',
  },
  desText: {
    fontSize: 10,
    marginTop: 8,
    fontWeight: '300',
    color: '#5C5C5C',
  },

});
