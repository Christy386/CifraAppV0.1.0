//importar bibliotecas gerais
import React, { useState } from "react";
//import { View, Text, Button, TextInput  } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import socket from './src/Api/Socket-io'

import {Entypo} from '@expo/vector-icons'

import HomeScreen from './src/pages/Home/index-home'
import Test from './src/pages/Test/index-test'
import Search from './src/pages/Search/index-search'
import Config from './src/pages/Config/index-config';

import globalStyles from './src/styles/global'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

var MsgVar;

function App() {

  return (
    <NavigationContainer>
      
      <Tab.Navigator 
        
        screenOptions={globalStyles.tabBar}>

        <Tab.Screen name="Home" component={HomeScreen} options={globalStyles.home} />
        <Tab.Screen name="Test" component={Test} options={globalStyles.test} />
        <Tab.Screen name="Search" component={Search} options={globalStyles.search} />
        <Tab.Screen name="Config" component={Config} options={globalStyles.config} />
      
      </Tab.Navigator>

      
      

    </NavigationContainer>
  );
}

export default App;