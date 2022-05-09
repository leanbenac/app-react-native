import React from "react";
import {Modal,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { colors } from "../StyleGlobal/Colors";

const MyModal = ({
  modalVisible,
  setModalVisible,
  handleEdit,
  todoSelected,
  handleDelete,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>X</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          onChangeText={handleEdit}
          value={todoSelected.todo}
        />

        <TouchableOpacity onPress={handleDelete}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 250,
    marginLeft: 12,
    height: 150,
    width: 350,
    borderRadius: 8,
    backgroundColor: colors.pastel,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    height: 30,
    padding: 6,
    marginLeft:15,
    backgroundColor: colors.cream,
    color: colors.blue,
    marginTop:25,
  },
});
