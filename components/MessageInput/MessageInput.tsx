import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  console.warn(message)

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon} />
        <TextInput
         style={styles.input} 
         placeholder="Signal message..." 
         onChangeText={setMessage}
         value={message} />
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        { message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: { flexDirection: 'row', padding: 10 },
  inputContainer: {
    backgroundColor: 'lightgrey',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    color: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    marginHorizontal: 5
  },
  buttonContainer: {
    width: 40, height: 40, backgroundColor: '#3777F0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 35
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  }
})
export default MessageInput;