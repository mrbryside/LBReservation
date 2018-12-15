import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import MyText from './MyText';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class SharedRoomList extends Component{
  render(){
    return(
      <View>
        <View style={styles.boxHeader}>
          <MyText style={styles.textHeader} text={'ห้องศึกษากลุ่ม'}></MyText>
          <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
              <MyText style={styles.textMore} text={'เพิ่มเติม'}></MyText>
              <Icon style={{top:2,marginLeft:2}} name="chevron-right" color={'#5C5C5C'} size={13}/>
            </View>
          </TouchableOpacity>
                  
        </View>
        <ScrollView horizontal='true' showsHorizontalScrollIndicator={false} style={{margin:-10,marginLeft:-8}}>
            <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/newminitheater.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
                  </View>
                </View>
          </View> 
          <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/biggroupstudy02f2.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
                  </View>
                </View>
          </View>
          <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/biggroupstudy01f2.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
                  </View>
                </View>
          </View>
          <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/newminitheater.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
                  </View>
                </View> 
          </View>
          <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/biggroupstudy02f2.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
                  </View>
                </View>
          </View>
          <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/newminitheater.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
                  </View>
                </View> 
          </View>
          <View style={styles.boxShadow}>
                <View style={styles.boxImage}>
                  <View style={{flex:0.6}}>
                    <Image style={styles.roomImage}
                    source={require('../assets/icons/biggroupstudy01f2.jpg')} />
                  </View>
                  <View style={styles.cardDescription}>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชื่อ :  
                      <MyText style={styles.desText} text={' ห้องศึกษากลุ่ม ชั้นที่ 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ชั้นที่ :
                      <MyText style={styles.desText} text={' 2'}></MyText>
                    </Text>
                    <Text numberOfLines={1} style={styles.boldDesText}>ความจุขั้นต่ำ :
                      <MyText style={styles.desText} text={' 7'}></MyText>
                    </Text>
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
  boldDesText :{
    fontSize:11,
    marginBottom:5,
    fontWeight:'500',
    color:'#5C5C5C',
    fontFamily:'Kanit-Regular'
  },
  desText :{
    fontWeight:'300',
    fontSize:11,
    color:'#5C5C5C',
    marginBottom:5,
  },
  boxHeader : {
    borderLeftWidth:7,
    flexDirection:'row',
    height:30,
    borderColor:'#6997B9',
    paddingLeft:8,
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:15,
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
