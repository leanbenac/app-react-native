import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../StyleGlobal/Colors";
import ButtonCustom from "./Button";

const Header = ({handleAdd}) => {

    const [input, setInput] = React.useState("");

    const handleAddAux = () =>{
        if (input !== ""){
            handleAdd(input)
            setInput("");
        }
    }

  return (

    <>
    <Text style={styles.title} > To Do App 2002 !</Text>

    <View style={styles.topContainer}>
      <TextInput
        style={styles.input}
        placeholder="What you have to do ?"
        onChangeText={setInput}
        value={input}
      />
      <ButtonCustom onPress={ ()=> handleAddAux() } />
    </View>
    </>
  )
};

export default Header;

const styles = StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
    },
    title: {
      flexDirection: 'column',
      fontSize: 18,
      marginTop: 30,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        width: 250,
        marginRight: 10,
        padding:8,
        paddingHorizontal: 2,
        backgroundColor: colors.cream,
        color: colors.blue,
    },
});
