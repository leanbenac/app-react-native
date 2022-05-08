import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import { colors } from '../StyleGlobal/Colors'

const ButtonCustom = ({onPress}) => {
    return (
        <TouchableOpacity style = {styles.button} onPress={onPress}>
            <Text>
                +
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
