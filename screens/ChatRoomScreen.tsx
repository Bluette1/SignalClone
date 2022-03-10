import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {
  return (<SafeAreaView style={styles.page}>
    <FlatList
      data={ChatRoomData.messages}
      renderItem={({ item: message }) => <Message message={message} />}
      inverted
    />
    <MessageInput />
  </SafeAreaView>);
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
});