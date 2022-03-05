// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState,useEffect,useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Detail from './Detail';
import {View, ActivityIndicator} from 'react-native';
import NewPost from './NewPost';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import useAuth from "./hooks/useAuth"
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [loading, setLoading] = useState(true);
  const { authuser, login } = useAuth();
  
  console.log(authuser);

  useEffect(() => {
    async function checkAuth() {
      try {


          const auth=    await AsyncStorage.getItem(
              'auth'
          );
              if (auth !== null) {
                console.log(auth)
                login(auth);
                
          }
        } catch (error) {
              console.log(error);
        }
    }

    checkAuth();
    setLoading(false);

  }, [])
  
  if (loading) {
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="black"/>
    </View>
  }
  return (
    <>
    { authuser ?  <NavigationContainer>
         <Drawer.Navigator>
          <Drawer.Screen name="Home" component={StackNavBar} />
          <Drawer.Screen name="Profile" component={Profile} />
        {/* <Drawer.Screen name="Article" component={Article} /> */}
        
      </Drawer.Navigator>
      
      </NavigationContainer>
        
    :   <NavigationContainer>
          <AuthStackNavigator />
      </NavigationContainer>
    }
    </>  
      );
    
}

function AuthStackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}  />
      </Stack.Navigator>
  )
}

function StackNavBar() {
  return (
    <Stack.Navigator
        screenOptions={{
        headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="NewPost" component={NewPost}  />
        <Stack.Screen name="Detail" component={Detail} options={{title:""}} />
        <Stack.Screen name="Profile" component={Profile} options={{title:""}} />
      </Stack.Navigator>
  )
}
// function BottomNavBar() {
//   return (
//     <Tab.Navigator  
//       screenOptions={{
//         tabBarShowLabel: false,
//         headerShown:false
//       }}
    
//     >
//       <Tab.Screen name="Feed" component={Home} options={{ tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />}}/>
//       <Tab.Screen name="Detail" component={Detail} options={{ tabBarIcon: ({ color, size }) => <Entypo name="notification" size={size} color={color} />}}/>
//     </Tab.Navigator>
//   );
// }

export default App;