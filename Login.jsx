import { SafeAreaView,View, Text,Button } from 'react-native'
import React from 'react'
import useAuth from "./hooks/useAuth";

export default function Login({ navigation }) {
  const { login } = useAuth();

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title="Login" onPress={()=>login({auth:'arkar'})}/>
      <Button title="Register" onPress={()=>navigation.navigate('Register')}/>
    </SafeAreaView>
  )
}