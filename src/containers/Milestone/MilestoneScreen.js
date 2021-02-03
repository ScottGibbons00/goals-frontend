import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Divider from 'react-native-divider';
import { List } from 'react-native-paper';


export default function Milestones() {
    const [text, setText] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [text3, setText3] = React.useState('');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 30, width: '100%', top: '10%' }}>What would you like to accomplish?</Text>
            </View>

            <TextInput style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '90%', borderRadius: 15 }}
                placeholder="Type out the milestone you want to accomplish."
                value={text}
                onChangeText={text => setText(text)}
                selectionColor='gray'
                multiline={true}
            />
            <Text style={{ flex: 1, fontSize: 30, top: "3%", width: '90%' }}>I want to accomplish this goal in 6 months</Text>
            <Divider borderColor="#000000" color="#000000" orientation="center"></Divider>
            <Text style={{ flex: .5, fontSize: 20, width: '80%' }}>Now break your milestone into smaller goals.</Text>
            <View style={{ flex: 2, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '90%'}}>
                
                <TextInput style={styles.input}
                    placeholder="Type in a smaller goal."
                    value={text1}
                    onChangeText={text1 => setText1(text1)}
                    selectionColor='gray'
                    multiline={true}
                />
                <TextInput style={styles.input}
                    placeholder="Type in a smaller goal."
                    value={text2}
                    onChangeText={text2 => setText2(text2)}
                    selectionColor='gray'
                    multiline={true}
                />
                <TextInput style={styles.input}
                    placeholder="Type in a smaller goal."
                    value={text3}
                    onChangeText={text3 => setText3(text3)}
                    selectionColor='gray'
                    multiline={true}
                />


            </View>
        </View>

    );
}


const styles = StyleSheet.create({

    input: {
        flex: .7, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 15,
        margin: 10
    },

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
    middleContainer: {
        flex: 2.8,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        top: '2%'
    },
    bottomContainer: {
        flex: 3,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});