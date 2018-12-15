/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,ScrollView, TextInput,StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MyText from './components/MyText';

export default class login extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      StudentID:"",
      password:"",
      error:"",
    };
  }

  async onLoginPressed(){
    try {
      let response = await fetch('http://libapp.com/api/userLogin',{
                              method: 'POST',
                              headers: {
                               'Accept': 'application/json',
                               'Content-Type': 'application/json'
                              },
                              body:JSON.stringify({
                                  StudentID:this.state.StudentID,
                                  password:this.state.password,
                              })
                            });
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        this.setState({error:""});
        let accessToken = res;
        console.log('resToken :'+accessToken);

      }
      else{
        let error = res;
        throw error;
      }
    }catch(error){
      this.setState({error:error});
      console.log('error :'+error);
    }
  }
  render(){
    return(
          <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1.7, y: 0.4 }}
            locations={[0.0, 0.9]} style={styles.parent} colors={['#7791C7','#252C3E']}>
            <SafeAreaView style={styles.safeAreaTop}>
            </SafeAreaView>
            <View>
              <MyText style={{color:'white',fontSize:35,marginLeft:40,marginTop:40}} text={"Login"}></MyText>
            </View>
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:-40}}>
            <Image style={{marginBottom:20,width:220,height:220}} source={require('./assets/icons/graduation-hat.png')} />
              <MyText style={{color:'white',fontSize:30,marginBottom:40}} text="LBReservation"></MyText>
              <View style={{width:'100%',paddingRight:40,paddingLeft:40,marginBottom:20}}>
                <Image style={styles.icon} source={require('./assets/icons/search.png')} />
                <TextInput onChangeText={ (text)=> this.setState({StudentID:text}) } style={styles.input} placeholder={"รหัสนิสิต"} placeholderTextColor="#818181"></TextInput>
              </View>
              <View style={{width:'100%',paddingRight:40,paddingLeft:40,marginBottom:20}}>
                <Image style={styles.icon} source={require('./assets/icons/password.png')} />
                <TextInput onChangeText={ (text)=> this.setState({password:text}) } style={styles.input} placeholder={"รหัสผ่านแอพ"} placeholderTextColor="#818181" ></TextInput>
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>           
                <TouchableOpacity onPress={this.onLoginPressed.bind(this)}>
                  <View style={{backgroundColor:'#5CC494',padding:8,paddingLeft:15,paddingRight:15,borderRadius:7,marginRight:10}}>
                    <MyText style={{color:'white',fontSize:16}} text="เข้าสู่ระบบ"></MyText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{backgroundColor:'#65A5D3',padding:8,paddingLeft:15,paddingRight:15,borderRadius:7}}>
                    <MyText style={{color:'white',fontSize:16}} text="รับรหัสแอพ"></MyText>
                  </View>
                </TouchableOpacity>
              </View> 


            </View>
          </LinearGradient>
        


    );
  }
}


const styles = StyleSheet.create({
  parent:{
      flex:1,
      flexDirection:'column'
  },
  input:{
    borderRadius:100,
    paddingLeft:50,
    width:'100%',
    backgroundColor: '#FFFFFF90',
    height:40,
    fontSize:17,
    fontFamily:'Kanit-Regular',
  },
  icon:{
    position:'absolute',
    zIndex:1,
    width:18,
    height:18,
    top:11,
    left:60,
  },

});
