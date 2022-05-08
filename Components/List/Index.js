import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../StyleGlobal/Colors'
import TodoItem from './TodoItem'

/**
 * Componente lista para renderizar todos
 * @param {*} handleModal Manejar visivilidad del modal
 * @param {*} todoList Lista de todos
 */

const List = ({handleModal, todoList}) => {

    const renderTodo = ({item}) => <TodoItem onPress = {handleModal} todo = {item}></TodoItem>
    
    return (
        <View style = {styles.itemList}>
        {/* <Item item = {{ id: 1, todo: "Estudiar React Native"}}> </Item>
        <Item item = {{ id: 2, todo: "Realizar Eventos"}}> </Item>
        <Item item = {{ id: 3, todo: "Estudiar Inglés"}}> </Item>
        <Item item = {{ id: 4, todo: "Cerrar Fecha Private Techno"}}> </Item>
        <Item item = {{ id: 5, todo: "Disfrutar el Viernes"}}> </Item> */}
        {todoList.length !== 0 ?
        <FlatList
            data = {todoList}
            keyExtractor = {todo => todo.id}
            renderItem = { renderTodo }
        />
        :
        <Text>You should do something !</Text>
        }
        
    </View>
    )
}

export default List

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.green,
        width: '95%',
        padding: 20,
        borderRadius: 8,
        color: colors.cream,
        flex: 0.8,
    },
})
