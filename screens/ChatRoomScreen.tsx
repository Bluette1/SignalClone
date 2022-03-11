import React from 'react';
import {StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  navigation.setOptions({title: 'Elon Musjk'})
  console.warn('Displaying chatroom with id: ', route.params?.id)
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