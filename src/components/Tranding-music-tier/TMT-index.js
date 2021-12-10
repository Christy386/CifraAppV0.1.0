import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import style from './TMT-style'

import axios from 'axios'

const dataInit = {musicas:[
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]}

import socket from '../../Api/Socket-io'

const Item = (props) => {
  let content = props.content
  return (
    <TouchableOpacity style={styles.item}>
      
      <View style={styles.imgBox}>
        <Image
          style={styles.img}
          source={{uri: content.img}}
        />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}> {content.name} </Text>
      </View>

      <View style={styles.numberBox}>
      <Text style={styles.number}> {content.id} </Text>
      </View>

    </TouchableOpacity>
  )
}

const TMT = () => {
  //console.log(DATA)
  const [DATA, setDATA] = useState(dataInit);

  axios({
    method: "get",
    url: "https://testonlynodereplit.christy386.repl.co/api",
    //responseType: "",
  }).then((response) => {
    
    setDATA(response.data)

  });
  
  return (
    <ScrollView style={styles.container}>
      <Item content={DATA.musicas[0]}/>
      <Item content={DATA.musicas[1]}/>
      <Item content={DATA.musicas[2]}/>
      <Item content={DATA.musicas[3]}/>
      <Item content={DATA.musicas[4]}/>
      <Item content={DATA.musicas[5]}/>
      <Item content={DATA.musicas[6]}/>
      <Item content={DATA.musicas[7]}/>
      <Item content={DATA.musicas[8]}/>
      <Item content={DATA.musicas[9]}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create(style);

export default TMT;