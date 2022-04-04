import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import moment from 'moment';
import styles from './styles';

export default function ChatRoomItem({ chatRoom }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id})
  }
  const user = chatRoom.users[1];
  return (<Pressable style={styles.container} onPress={onPress}>
    <Image source={{ uri: user.imageUri }} style={styles.image} />
    {chatRoom.newMessages && <View style={styles.badgeContainer}><Text style={styles.badgeText}>{chatRoom.newMessages}</Text></View>}
    <View style={styles.rightContainer}>
      <View style={styles.row}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.text}>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
      </View>
      <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
    </View>
  </Pressable>)
}


