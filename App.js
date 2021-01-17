import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import Milestones from './screens/MilestoneScreen';
import Settings from './screens/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNavigation } from 'react-native-paper';


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'milestones', title: 'milestones', },
    { key: 'home', title: 'home', },
    { key: 'settings', title: 'settings',  },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    milestones: Milestones,
    home: HomeScreen,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#FFFFFF' }}
      
    />
  );
}