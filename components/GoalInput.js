import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {

    let [goal, setGoal] = useState('');

    const goalInputHandler = (value) => {
        setGoal(value);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                onChangeText={goalInputHandler}
                value={goal}

            />
            <Button
                style={styles.button}
                title="ADD"
                onPress={() => {
                    props.onAddGoal(goal);
                    setGoal("")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputText: {
        padding: 10,
        borderColor: "grey",
        borderWidth: 1,
        width: "80%"
    }
})

export default GoalInput;