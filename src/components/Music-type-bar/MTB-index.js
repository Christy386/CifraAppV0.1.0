import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import style from './MTB-style'
import DATA from './Data'

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity style = {styles.opacity}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    
  </View>
);

const MTB = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create(style);

export default MTB;