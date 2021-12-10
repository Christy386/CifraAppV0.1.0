import React from 'react';
import { StatusBar } from 'react-native';

const StyleSheet = {
    container: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: StatusBar.currentHeight || 0,
        marginVertical: 10,
        //width: '80%',
        //height: 350
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 0,
        //marginVertical: 8,
        width: 350,
        height: 330,        
        marginHorizontal: 6,
        //paddingLeft: 8,
        //paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15

    },imgBox:{
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        //borderRadius: 50
    },
    img: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
        
    },
    imgContent: {
        width: '100%',
        height: '100%',
    },
    titleBox: {
        width: '70%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: '#34184a'
    },
    numberBox: {
        width: '10%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9c2ff',
        borderRadius: 20,
        margin: 10,
        opacity: 0.7,
    },
    number:{
        fontSize: 18,
        color: '#34184a'
    }
}

export default StyleSheet
