import { StyleSheet, Text} from 'react-native';

function GoalItem(props){
    return(
        <Text style={styles.goalTextFont}>{props.text}</Text>
    )
};

const styles = StyleSheet.create({
    goalTextFont:{
        fontSize: 14,
        lineHeight: 35,
        letterSpacing: 0.5,
        lineHeight: 40,
        borderWidth: 2,
        borderColor: '#8f8f8f',
        borderRadius: 15,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingTop: 2,
        backgroundColor: '#c7c5c5',
        },
})
  
export default GoalItem;
