import { createMaterialTopTabNavigator,createAppContainer } from 'react-navigation';
import Main from './tabs/main';
import Howto from './tabs/howto';
import MyReservation from './tabs/myReservation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { Dimensions,Platform } from 'react-native'

const { height } = Dimensions.get('window');

const TabNavigator = createMaterialTopTabNavigator(
{
    หน้าหลัก:{
        screen: Main,
        navigationOptions:{
            tabBarIcon:({ tintColor }) => (
                <Icon name="home" color={tintColor} size={20}/>
            )
        }
    },
    วิธีใช้:{
        screen: Howto,
        navigationOptions:{
            tabBarIcon:({ tintColor }) => (
                <Icon name="chalkboard-teacher" color={tintColor} size={20}/>
            )
        }
    },
    รายการจอง:{
        screen: MyReservation,
        navigationOptions:{
            tabBarIcon:({ tintColor }) => (
                <Icon name="calendar-alt" color={tintColor} size={20}/>
            )
        }
    },


},
{ 
    tabBarOptions:{ 
        showIcon: true,
        activeTintColor: '#6997B9',
        inactiveTintColor: '#8B8B8B',
        indicatorStyle:{
            height:0
        },
        labelStyle: {
            fontSize: 12,
            marginTop:0,
            fontFamily:'Kanit-Regular',
            fontWeight:'300',
        },
        iconStyle:{
            marginTop:-4,
        },
        style:{
            backgroundColor:'white',
            borderTopWidth:1,
            borderTopColor:'#e5e5e5',
            height:((Platform.OS === 'ios' && height === 812) ? 62 : 50),
        }
    },
    tabBarPosition:'bottom',
});



export default createAppContainer(TabNavigator);

