import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import { colors } from '../StyleGlobal/Colors'

const ButtonCustom = () => {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text>
                Add Todo
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        borderRadius: 10,
        padding:7,
        borderWidth: 2,
    },
})
