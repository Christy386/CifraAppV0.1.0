import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import MyStyle from './style-search'

function Search({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Search</Text>
            <TextInput style={{width: '80%', height: 35, backgroundColor: '#ac7ff5', color: '#fff', paddingHorizontal: 15, borderRadius: 20}}/>
        </View>
    );
  }
  
  const styles = StyleSheet.create(MyStyle);

  export default Search;  