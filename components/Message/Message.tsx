import React from "react";
import { View, Text, StyleSheet } from 'react-native';
const blue = '#3777F0';
const grey = 'lightgrey';

const Message = ({ message }) => {
  const myId = 'u1';
  const isMe = message.user.id === myId;
  
  return (
    <View style={[styles.container, isMe ? styles.leftContainer : styles.rightContainer]}>
      <Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%'
  },
  leftContainer: { marginLeft: 10, marginRight: 'auto', backgroundColor: blue },
  rightContainer: { marginLeft: 'auto', marginRight: 10, backgroundColor: grey }
});

export default Message;