import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
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
        ]
      }
    ]
  }

  /*
  'Learn Spanish',
      'Raise GPA by .2',
      'Learn 10 new recipes'
      */

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{  flex: 1.5, alignSelf: 'center', width: '90%', top: '15%', flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: '30%', width: '60%'}}>Welcome back, {profile.name}.</Text>
            <Image source={profile.profilePic} style={{width: 100, height: 100, borderRadius: 50}}/>
            
      </View>
      <View style={{flex: 2.8, width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', top: '2%'}}>
        <View style={{backgroundColor: '#C4C4C4', borderRadius: '15px', height: '50%', justifyContent: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 20, padding: '5%', textAlign: 'center'}}>you have {profile.milestones.length} milestones in progress right now. check them out below</Text>

        </View>
        <View style={{justifyContent: 'space-around'}}>
          {renderMilestones()}
        </View>
      </View>
      <View style={{flex: 3, width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{fontSize: 24}}>Main milestone</Text>
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
    <List.Item style={{backgroundColor: '#C4C4C4', borderRadius: '15px', height: '30%', textAlign: 'right'}}
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
    
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });