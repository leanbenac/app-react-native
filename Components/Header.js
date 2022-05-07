import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
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
    <View style={styles.topContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        onChangeText={setInput}
        value={input}
      />
      <ButtonCustom onPress={ ()=> handleAddAux() } />
    </View>
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
});
