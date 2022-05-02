import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../StyleGlobal/Colors'

const TodoItem = ({todo}) => {
    return (
        <View style = {styles.itemContainer}>
            <Text style = { styles.text }> { todo.todo } </Text>
        </View>
    )
} 

export default TodoItem

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.cream,
        padding: 10,
        borderRadius: 10,
        margin: 5,
        
    },
    text: {
        color: colors.blue,
        fontSize: 18,
 
    }
})
