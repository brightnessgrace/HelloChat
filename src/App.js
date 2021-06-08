
import 'react-native-gesture-handler';

import {  StackNavigator,NavigationContainer } from '@react-navigation/native';

import React from 'react';

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';


import styles from './component/styles';

import LoadingScene from './LoadingScene';


const Navigation = StackNavigator ( {

Home:{

  screen:LoadingScene,
},

})



export default Navigation;
