import React from 'react';
import { StatusBar } from 'react-native';

const StyleSheet = {
    container: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: StatusBar.currentHeight || 0,
        marginVertical: 10,
        height: 20
    },
    item: {
        backgroundColor: '#f9c2ff',
        //padding: 0,
        //marginVertical: 8,
        marginHorizontal: 6,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 20

    },
    title: {
        fontSize: 14,
        color: '#34184a'
    },
    opacity:{
        backgroundColor:'transparent', 
        height: '100%', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
}

export default StyleSheet
