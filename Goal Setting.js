import { StyleSheet, Button, View, Text, TextInput, Pressable, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder='Your Course Goal!'
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
      </View>
      <View>
        <Pressable style={styles.button} onPress={addGoalHandler}>
          <Text style={styles.buttonText}>Add Goals</Text>
        </Pressable>
      </View>
      <View style={styles.margin}>
        <Image source={require('@/assets/images/goal.png')} style={styles.goalImage} />
        <Text style={styles.goalFont}>    G O A L S    </Text>
        <Image source={require('@/assets/images/goal.png')} style={styles.goalImage} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginRight: 1,
    backgroundColor: '#e1e1e3',
  },
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
  goalsContainer: {
    flex: 3,
    borderTopWidth: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#8f8f8f',
    paddingTop: 10,
    paddingLeft: 20,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  margin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#8f8f8f',
    backgroundColor: '#c7c5c5',
  },
  goalFont: {
    fontSize: 15,
  },
  goalImage: {
    height: 30,
    width: 30,
  },
});
