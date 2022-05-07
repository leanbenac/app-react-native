import React from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../StyleGlobal/Colors';

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
        <View style = {styles.modalContainer}>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <Text>
                X
                </Text>
            </TouchableOpacity>

            <TextInput
            style = { styles.input }
            onChangeText = { handleEdit}
            value = {todoSelected.todo}
            />
            
            <TouchableOpacity onPress={handleDelete}>
                <Text>Eliminar todo</Text>
            </TouchableOpacity>
        </View>
        </Modal>
    )
}

export default MyModal

const styles = StyleSheet.create({    
    modalContainer: {
    marginTop: 200,
    marginLeft:11,
    height: 150, 
    width: 350,
    borderRadius: 8,
    backgroundColor: colors.pastel,
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
})
