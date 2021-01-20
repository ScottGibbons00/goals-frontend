import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { List } from 'react-native-paper';

const profile = {
    name: 'Syed',
    profilePic: require('../assets/dartmouth.jpg'),
    milestones: [
      {
        name: 'Walk 30 mintutes a day for a month',
        timeline: 1,
        isMain: false,
        goals: [{goal: 'goal 1', isComplete: false},
        {goal: 'goal 2', isComplete: true},
        {goal: 'goal 3', isComplete: false},
        
        ]
      },
      {
        name: 'Redo resume',
        timeline: 2,
        isMain: true,
        goals: [
        {goal: 'Complete personal portfolio', isComplete: true},
        {goal: 'Join new club', isComplete: false},
        {goal: 'Remove high school experience', isCompelete: false},
        {goal: 'Update interests', isComplete: true},
        {goal: 'Contact Tim for recommendation', isComplete: true},
        ],
        
      },
      {
        name: 'Learn Spanish',
        timeline: 1,
        isMain: false,
        goals: [{goal: 'goal 1', isComplete: false},
        {goal: 'goal 2', isComplete: true},
        {goal: 'goal 3', isComplete: false},
        
        ]
      },
      {
        name: 'Raise GPA by .2',
        timeline: 1,
        isMain: false,
        goals: [{goal: 'goal 1', isComplete: false},
        {goal: 'goal 2', isComplete: true},
        {goal: 'goal 3', isComplete: false},
        
        ]
      },
 
    ]
  }

  /*
  'Learn Spanish',
      'Raise GPA by .2',
      'Learn 10 new recipes'
      */

export default function Home() {
  return (
    <View style={styles.page}>
        <View style={styles.header}>
            <Text style={{fontSize: 30, width: '60%'}}>Welcome back, {profile.name}.</Text>
            <Image source={profile.profilePic} style={{width: 100, height: 100, borderRadius: 50}}/>
            
      </View>
      <View style={styles.middleContainer}>
        <ScrollView>
        <View style={{backgroundColor: '#C4C4C4', borderRadius: '15px', height: '50%', justifyContent: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 20, padding: '5%', textAlign: 'center'}}>you have {profile.milestones.length} milestones in progress right now. check them out below</Text>

        </View>
        <View style={{justifyContent: 'space-around'}}>
          {renderMilestones()}
        </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{fontSize: 24, width: '30%'}}>Main milestone</Text>
      <View style={{backgroundColor: '#C4C4C4', borderRadius: '15px', height: '50%', justifyContent: 'center'}}>
          {renderMainProgress()}

        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const renderMilestones = () => {
  return profile.milestones.map((milestone) => 
    <List.Item style={{backgroundColor: '#C4C4C4', borderRadius: '15px', height: '20%', color: 'white'}}
    title= {milestone.name}
  />)
};

const renderMainProgress = () => {
  const mainMilestone = profile.milestones.find(milestone => milestone.isMain);
  const complete = mainMilestone.goals.filter(goal => goal.isComplete);
  const percentComplete = ~~(complete.length / mainMilestone.goals.length * 100);
  return <Text style={{color: '#FFFFFF', fontSize: 20, textAlign: 'center'}}>"{mainMilestone.name}" is {percentComplete}% complete so far</Text>
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
      width: '90%', top: '15%', 
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