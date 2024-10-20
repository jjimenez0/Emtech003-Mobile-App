import { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textinput}
                placeholder='Your Course Goal!'
                value={enteredGoalText}
                onChangeText={goalInputHandler}
            />
            <View>
                <Pressable style={styles.button} onPress={addGoalHandler}>
                    <Text style={styles.buttonText}>Add Goals</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    textinput: {
        borderWidth: 3,
        borderColor: '#8f8f8f',
        width: '100%',
        padding: 13,
        borderRadius: 15,
        backgroundColor: '#c7c5c5',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 129,
        marginTop: 10,
        borderRadius: 5,
        elevation: 2,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
