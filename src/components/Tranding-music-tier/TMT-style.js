import React from 'react';
import { StatusBar } from 'react-native';

const StyleSheet = {
    container: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: StatusBar.currentHeight || 0,
        //marginVertical: 10,
        //width: '80%',
        //height: 350
        marginTop: 10,
        marginBottom: 35
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 0,
        //width: '100%',
        height: 50,        
        marginHorizontal: 6,
        marginVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: "row"

    },imgBox:{
        width: '15%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 4
    },
    titleBox: {
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        color: '#34184a'
    },
    numberBox: {
        width: '15%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number:{
        fontSize: 24,
        color: '#34184a'
    }
}

export default StyleSheet
