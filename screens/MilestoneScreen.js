import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Milestones() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.header}>
      <Text style={{fontSize: 30, width: '100%', top: '20%'}}>What would you like to accomplish?</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    
    page: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    header: {
      flex: 1.5, 
      alignSelf: 'center', 
      width: '90%', 
      top: '15%', 
      flexDirection: 'row', 
      justifyContent: 'center'
    },
    middleContainer:{
      flex: 2.8, 
      width: '90%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-around', 
      top: '2%'
    },
    bottomContainer:{
      flex: 3,
      width: '90%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center'
    }
  });