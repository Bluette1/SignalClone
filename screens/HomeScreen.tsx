import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({ item: chatRoom }) => <ChatRoomItem chatRoom={chatRoom} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
});
