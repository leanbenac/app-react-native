import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import Item from '../Components/Item';
import ButtonCustom from '../Components/Button' 
import { colors } from '../StyleGlobal/Colors';

const AddList = () => {
    //guardo el dato con un estado + inicializo con un strin
    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleAdd = () => {
        setTodoList([...todoList, {id: Date.now(), todo: input}])
    }

    console.log(todoList);
    return (
        <View style ={ styles.container }>
            <View style ={ styles.topContainer }>
                <TextInput
                style = { styles.input }
                placeholder = "Add todo"
                onChangeText = { setInput }
                value = {input}
                />
                <ButtonCustom onPress= { handleAdd }/>
            </View>
            <View style = {styles.itemList}>
                {/* <Item item = {{ id: 1, todo: "Estudiar React Native"}}> </Item>
                <Item item = {{ id: 2, todo: "Realizar Eventos"}}> </Item>
                <Item item = {{ id: 3, todo: "Estudiar Inglés"}}> </Item>
                <Item item = {{ id: 4, todo: "Cerrar Fecha Private Techno"}}> </Item>
                <Item item = {{ id: 5, todo: "Disfrutar el Viernes"}}> </Item> */}
                {todoList.length !== 0 ?
                todoList.map( item => {
                    return <Item item = { item }  key = {item.id}/>
                })
                :
                <Text>No hay todos cargados</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        padding:6,
        paddingHorizontal: 8,
        backgroundColor: colors.cream,
        color: colors.blue
    },
    button: {
        backgroundColor: colors.green,
        borderRadius: 10,
        padding:7,
        borderWidth: 2,
    },
    itemList: {
        backgroundColor: colors.green,
        width: '95%',
        padding: 20,
        borderRadius: 10,
        color: colors.cream,
        
    },

})



export default AddList;