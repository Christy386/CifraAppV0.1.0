import * as React from 'react';
import {Entypo, Feather, Octicons, MaterialCommunityIcons} from '@expo/vector-icons'

const style = {

    home:{
        headerStyle:{
            height: 29,
            backgroundColor: '#34184a',
            borderBottomColor: 'trasparent',
        },
        tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color}/>
        ),

    },
    
    test:{
        headerStyle:{
            height: 29,
            backgroundColor: '#34184a',
            borderBottomColor: 'trasparent',
        },
        tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="hammer-screwdriver" size={size} color={color}/>
        ),

    },

    search:{
        headerStyle:{
            height: 29,
            backgroundColor: '#34184a',
            borderBottomColor: 'trasparent',
        },
        tabBarIcon: ({size, color}) => (
            <Feather name="search" size={size} color={color}/>
        ),

    },

    config:{
        headerStyle:{
            height: 29,
            backgroundColor: '#34184a',
            borderBottomColor: 'trasparent',
        },
        tabBarIcon: ({size, color}) => (
            <Octicons name="gear" size={size} color={color}/>
        ),

    },
    
    tabBar: {
        tabBarActiveTintColor: '#c6279a', 
        tabBarInactiveTintColor: '#fff',//edc951
        
        tabBarStyle: {
            
            paddingTop:0, 
            backgroundColor: '#34184a', 
            paddingBottom:5, 
            borderTopColor: 'transparent',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute'
            
        }
    }

}

export default style

//anotações: 
/*noHeader: {
        headerStyle:{
            height: 29,
            backgroundColor: '#34184a',
            borderBottomColor: 'trasparent',
        },
        
    },
    withHeader: {
        headerStyle:{
            backgroundColor: '#34184a',
            borderBottomColor: 'trasparent',
            
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',//edc951
    },*/