import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { List } from 'react-native-paper';
import { styles } from './HomeStyle'


const profile = {
  name: 'Syed',
  profilePic: require('../../../assets/dartmouth.jpg'),
  milestones: [
    {
      name: 'Walk 30 mintutes a day for a month',
      timeline: 1,
      isMain: false,
      goals: [{ goal: 'goal 1', isComplete: false },
      { goal: 'goal 2', isComplete: true },
      { goal: 'goal 3', isComplete: false },

      ]
    },
    {
      name: 'Redo resume',
      timeline: 2,
      isMain: true,
      goals: [
        { goal: 'Complete personal portfolio', isComplete: true },
        { goal: 'Join new club', isComplete: false },
        { goal: 'Remove high school experience', isCompelete: false },
        { goal: 'Update interests', isComplete: true },
        { goal: 'Contact Tim for recommendation', isComplete: true },
      ],

    },
    {
      name: 'Learn Spanish',
      timeline: 1,
      isMain: false,
      goals: [{ goal: 'goal 1', isComplete: false },
      { goal: 'goal 2', isComplete: true },
      { goal: 'goal 3', isComplete: false },

      ]
    },
    {
      name: 'Raise GPA by .2',
      timeline: 1,
      isMain: false,
      goals: [{ goal: 'goal 1', isComplete: false },
      { goal: 'goal 2', isComplete: true },
      { goal: 'goal 3', isComplete: false },

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
        <Text style={styles.welcome}>Welcome back, {profile.name}.</Text>
        <Image source={profile.profilePic} style={styles.profilePic} />

      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.progressText}>you have {profile.milestones.length} milestones in progress right now. check them out below</Text>
        <ScrollView>
          <View style={styles.scroll}>
            {renderMilestones()}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.mainMilestone}>Main milestone</Text>
        <View style={styles.progress}>
          {renderMainProgress()}

        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const renderMilestones = () => {
  return profile.milestones.map((milestone) =>
    <List.Item style={styles.listItem}
      title={milestone.name}
    />)
};

const renderMainProgress = () => {
  const mainMilestone = profile.milestones.find(milestone => milestone.isMain);
  const complete = mainMilestone.goals.filter(goal => goal.isComplete);
  const percentComplete = ~~(complete.length / mainMilestone.goals.length * 100);
  return <Text style={styles.completeText}>"{mainMilestone.name}" is {percentComplete}% complete so far</Text>
}

