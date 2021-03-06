import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { colors } from '../../StyleGlobal/Colors'

const TodoItem = ({todo, onPress, handleDelete}) => {

        // const handleDeleteItem = ({todoList,todoSelected, setTodoList }) => {
    //     const itemFiltrado = todoList.filter(
    //         (item) => item.id !== todoSelected.id
    //     )
    //     setTodoList(itemFiltrado);
    // }

    return (
        <View style = {styles.itemContainer}>
            <TouchableOpacity style = {styles.containerText} onPress= { () => onPress (todo)}>
                <Text style = { styles.text }> { todo.todo } </Text>

                <TouchableWithoutFeedback>
                    <TouchableOpacity style={ styles.buttonX } onPress ={ handleDelete }>
                        <Text style = { styles.textX } >X</Text>
                    </TouchableOpacity>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </View>
    )
} 
 


export default TodoItem

const styles = StyleSheet.create({
    containerText: { 
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    text: {
        color: colors.blue,
        fontSize: 18,
        backgroundColor: colors.cream,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        width:'75%',
    },
    buttonX: {
        backgroundColor: 'red',
        borderRadius: 5,
        paddingTop:10,
        paddingRight:15,
        paddingLeft: 15,
        margin: 5,
    },
    textX: {
        fontSize:20,
        color: 'white',
    } 
})
