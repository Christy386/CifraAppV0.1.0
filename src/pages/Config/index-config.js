import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import StyleDeepPurple from './styleDeepPurple-config'
import StyleGray50 from './styleGray50-config'

function Config({navigation}) {

    const [s1,setS1] = useState(false)

    const [style, setStyle] = useState(styleDeepPurple)

    const [styleType, setStyleType] = useState('Deep Purple')

    function compS1(){
        if(s1){
            setS1(false)
            setStyle(styleDeepPurple)
            setStyleType('Deep Purple')
        }else{
            setS1(true)
            setStyle(styleGray50)
            setStyleType('Gray50')
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>Página Config</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={{ false:"#f4f3f4", true: "#f5dd4b"}}
                onValueChange={compS1}
                value={s1}
            />
            <Text style={style.text}>{styleType}</Text>
        </View>
    );
  }
  
  const styleDeepPurple = StyleSheet.create(StyleDeepPurple);
  const styleGray50 = StyleSheet.create(StyleGray50);

  export default Config;