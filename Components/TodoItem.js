import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../StyleGlobal/Colors'

const TodoItem = ({todo, onPress}) => {
    return (
        <View style = {styles.itemContainer}>
            <TouchableOpacity onPress= { () => onPress (todo.id)}>
                <Text style = { styles.text }> { todo.todo } </Text>
            </TouchableOpacity>
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
