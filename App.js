import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [listGoals, setList] = useState([]);

  const addGoalHandler = (enterdGoal) => {
    let key = Math.random().toString()
    setList(currentGoals => [...currentGoals, { uid: key, value: enterdGoal }]);
  }

  const onDeleteHandler = (uid) => {
    console.log(`Deleted: ${uid}`);
    setList(currentGoals => currentGoals.filter(item => item.uid != uid));
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={listGoals}
        keyExtractor={(item) => item.uid}
        renderItem={
          itemData => <GoalItem
            title={itemData.item.value}
            uid={itemData.item.uid}
            onDelete={onDeleteHandler}
          />
        } />

    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});

