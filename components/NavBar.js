import React, {Component} from 'react';
import {Platform,ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MyText from './MyText';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class NavBar extends Component{
  render(){
    return(
      <LinearGradient colors={['#475474','#6278A5']} useAngle='true'>
        <SafeAreaView>
          <View style={styles.navBar}>
            <View style={{flex:1}}>
              <TouchableOpacity>
                <Image style={styles.icon} source={this.props.icon} />
              </TouchableOpacity>
            </View>
            <MyText style={{color:'white',fontSize:19,}} text={this.props.header}></MyText>
            <View style={{flex:1,alignItems:'flex-end'}}>
              <TouchableOpacity>
                <Icon style={styles.iconRight} name="bell" color={'white'} size={23}/>
              </TouchableOpacity>
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
  iconRight:{
    marginRight:30,
  },


});
