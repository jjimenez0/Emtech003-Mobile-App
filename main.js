import { StyleSheet, Button, View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import GoalHeader from '../components/GoalHeader';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <GoalHeader/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={({item}) => {
          return <GoalItem text={item.text} />
        }}/>
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
  goalsContainer: {
    flex: 3,
    borderTopWidth: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#8f8f8f',
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
