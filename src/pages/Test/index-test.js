import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import socket from '../../Api/Socket-io'

import MyStyle from './style-test'

function Test(props,{navigation}) {
    const [name, setName] = useState('')
    const [code, setCode] = useState('')

    //var stateName = setName
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} onChangeText={setName} value={name}/>

            <Text style={styles.text}>Code</Text>
            <TextInput style={styles.input} onChangeText={setCode} value={code}/>

            <TouchableOpacity style={styles.opacity} onPress={() => {
                    socket.emit('test', {name: name, code: code})
                    //console.log(name, code)
                }}>
                <Text style={styles.text}>SEND</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Página Test</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create(MyStyle);

  export default Test;