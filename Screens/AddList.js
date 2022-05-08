import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Header from "../Components/Header";
import List from "../Components/List/Index";
import MyModal from "../Components/MyModal";

const AddList = () => {
  //guardo el dato con un estado + inicializo con un strin
  const [todoList, setTodoList] = useState([]);
  const [todoSelected, setTodoSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (input) => {
    setTodoList([...todoList, { id: Date.now(), todo: input }]);
  }; //funcion por referencia

  const handleModal = (todoSelected) => {
    setModalVisible(true);
    setTodoSelected(todoSelected);
  };

  const handleDelete = () => {
    const todosFiltrados = todoList.filter(
      (item) => item.id !== todoSelected.id
    );
    setTodoList(todosFiltrados);
    setModalVisible(false);
  };

  const handleEdit = (text) => {
    const todoToEdit = todoList.find((todo) => todo.id === todoSelected.id);
    todoToEdit.todo = text;
    setTodoList([...todoList]);
  };

  return (
    <View style={styles.container}>
      <Header handleAdd={handleAdd} />
      <List handleModal={handleModal} todoList={todoList} />
      <MyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        todoSelected={todoSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
});

export default AddList;
