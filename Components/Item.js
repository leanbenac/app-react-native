import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../StyleGlobal/Colors'

const Item = ({item}) => {
    return (
        <View style = {styles.itemContainer}>
            <Text style = { styles.text }> { item.todo } </Text>
        </View>
    )
} 

export default Item

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
