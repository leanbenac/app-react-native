import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import image from './assets/coder.png';
// import * as Sharing from 'expo-sharing';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello Coder!</Text>
      <Image 
      source={image} 
      style={ styles.image}
      />
      <TouchableOpacity
      onPress={() => Alert.alert('Good Trip!')}
      style= {styles.button}
      >
        <Text>You are ready? Click.</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: { fontSize: 30,color: "white", marginBottom: 20 },
  image: {height: 200, width: 200, borderRadius: 100},
  button: {backgroundColor: 'white', padding: 7, marginTop: 15, fontSize: 40, borderRadius:10 }

});

export default App;
