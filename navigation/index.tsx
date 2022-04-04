/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, Image, View, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home" component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader}}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width,
      padding: 10,
      alignItems: 'center'
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1.5, textAlign: 'center', marginLeft: 50, fontWeight: 'bold' }}>Signal</Text>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
        <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 5 }} />
        <Feather name="edit" size={24} color="black" style={{ marginHorizontal: 5 }} />
      </View>
    </View>
  );
}

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width - 50,
      marginLeft: -25,
      padding: 5,
      alignItems: 'center'
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1.5, marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
        <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 5 }} />
        <Feather name="edit" size={24} color="black" style={{ marginHorizontal: 5 }} />
      </View>
    </View>
  );
}

