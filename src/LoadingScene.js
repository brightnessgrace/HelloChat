

import React, { Component } from 'react';
import { StackNavigation } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './component/styles';

export default class LoadingScene extends Component{
    static navigatioOptions = {
      header:null
    }

  
    render(){
        return(

            <View style = {styles.container}>
                <Text style ={styles.text}> Welcome Home </Text>
            </View>
        );
    }
}



