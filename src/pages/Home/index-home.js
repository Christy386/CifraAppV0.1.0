import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView, Image } from 'react-native';

import MyStyle from './style-home'
import MTB from '../../components/Music-type-bar/MTB-index'
import TSB from '../../components/Trending-singer-bar/TSB-index'
import TMT from '../../components/Tranding-music-tier/TMT-index'

function home() {
    return (
        <ScrollView style={{backgroundColor:'#4a2a64'}} showsVerticalScrollIndicator={false}>

            <MTB/>
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>Top singers!!!</Text>
            </View> 
            <TSB/>
            <View style={styles.container}>    
                <Text style={{color: '#fff'}}>Top musics!!!</Text>
            </View>  
            <TMT/>
            <View style={styles.container}>    
                <Text style={{color: '#fff'}}>Home Screen!!!</Text>
            </View>   

        </ScrollView>
    );
  }

  const styles = StyleSheet.create(MyStyle);


  export default home;