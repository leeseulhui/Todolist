 import React from 'react';
 import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import TodoScreen from './components/TodoScreen';
 import MemoScreen from './components/MemoScreen';
 import {Ionicons} from 'react-native-vector-icons'
 import { FontAwesome5 } from '@expo/vector-icons'; 
 

 const Tab = createBottomTabNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TODO APP" component={TodoScreen} options={{tabBarIcon:()=>( 
        <Ionicons
          name="ios-home" size={30} />
          ),}}/>
        <Tab.Screen name="Memo" component={MemoScreen}options={{tabBarIcon:()=>(
          <FontAwesome5 name="pencil-alt" size={24} color="black" />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 