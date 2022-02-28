import {View, Text } from 'react-native';
export default function ({ route, navigation }) {
  // console.log(route);
  return (
    <View style={{margin:20}}>
      <Text>{route.params?.title??"NAvigate from Bottom"}</Text>
    </View>
  )
}