import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';

import style from './TSB-style'
import axios from 'axios'

const dataInit = {artistas:[
  {},
  {},
  {},
  {},
  {},
]}


const Item = (props) => {
  let content = props.content
  return (
    <TouchableOpacity style={styles.item}>
      
      <View style={styles.imgBox}>
        <ImageBackground style={styles.imgContent} imageStyle={styles.img} source={{uri: content.img}} >

          <View style={styles.numberBox}>
            <Text style={styles.number}> {content.id} </Text>
          </View>

        </ImageBackground>
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}> {content.name} </Text>
      </View>

    </TouchableOpacity>
  )
}



const TSB = () => {
  
  const [DATA, setDATA] = useState(dataInit);

  axios({
    method: "get",
    url: "https://testonlynodereplit.christy386.repl.co/api",
    //responseType: "",
  }).then((response) => {
    
    setDATA(response.data)

  });

  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      <Item content={DATA.artistas[0]}/>
      <Item content={DATA.artistas[1]}/>
      <Item content={DATA.artistas[2]}/>
      <Item content={DATA.artistas[3]}/>
      <Item content={DATA.artistas[4]}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create(style);

export default TSB;