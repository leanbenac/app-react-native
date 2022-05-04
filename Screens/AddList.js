import React from 'react';
import { StyleSheet, View, TextInput, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import TodoItem from '../Components/TodoItem';
import ButtonCustom from '../Components/Button';
import { colors } from '../StyleGlobal/Colors';



const AddList = () => {
    //guardo el dato con un estado + inicializo con un strin
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [idSelected, setIdSelected] = useState ("")

    const handleAdd = () => {
        if (input !== ""){
        setTodoList([...todoList, {id: Date.now(), todo: input}]);
        setInput ("");
        }
    }
    //funsion por referencia
    const renderTodo = ({item}) => <TodoItem onPress = {handleModal} todo = {item}></TodoItem>

    const handleModal = (id) => {
        setModalVisible(true);
        setIdSelected(id);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item.id !== idSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
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
                <FlatList
                    data = {todoList}
                    keyExtractor = {todo => todo.id}
                    renderItem = { renderTodo }
                />
                :
                <Text>No hay todos cargados</Text>
                }
                
            </View>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            >
            <View style = {styles.modalContainer}>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                    <Text>
                    X
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <Text>Eliminar todo</Text>
                </TouchableOpacity>
            </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    },
    topContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        padding:6,
        paddingHorizontal: 8,
        backgroundColor: colors.cream,
        color: colors.blue,

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
        flex: 0.8,
    },
    modalContainer: {
        marginTop: 200,
        marginLeft:11,
        height: 150, 
        width: 350,
        borderRadius: 8,
        backgroundColor: colors.pastel,

    }

})  



export default AddList;