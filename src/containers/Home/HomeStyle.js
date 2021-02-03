import { StyleSheet } from 'react-native'

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
    },
    welcome: {
        fontSize: 30,
        width: '60%'
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    progressText: {
        backgroundColor: '#C4C4C4', 
        borderRadius: '15px', 
        height: '40%', 
        justifyContent: 'center', 
        color: '#FFFFFF', 
        fontSize: 20, 
        padding: '5%', 
        textAlign: 'center'
    },
    scroll: {
        display: 'flex', 
        justifyContent: 'space-around'
    },
    mainMilestone:{
        fontSize: 24, 
        width: '30%',
    },
    progress:{
        backgroundColor: '#C4C4C4', 
        borderRadius: '15px', 
        height: '50%', 
        justifyContent: 'center'
    },
    listItem:{
        backgroundColor: '#C4C4C4', 
        borderRadius: '15px', 
        height: '25%', 
        color: 'white',
        margin: 10
    },
    completeText:{
        color: '#FFFFFF', 
        fontSize: 20, 
        textAlign: 'center' 
    }
});

export { styles }