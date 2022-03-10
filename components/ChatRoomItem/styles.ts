import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10 },
  rightContainer: { flex: 1, justifyContent: 'center' },
  image: { height: 50, width: 50, borderRadius: 30, marginRight: 10 },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3
  },
  name: { fontWeight: 'bold', fontSize: 18 },
  text: { color: 'gray' },
  badgeContainer: {
    backgroundColor: '#3777F0',
    width: 20, height: 20, borderRadius: 10, justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
    borderWidth: 1, borderColor: 'white'
  },
  badgeText: { color: 'white' }
});

export default styles;