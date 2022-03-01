// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 

import Home from './Home';
import Detail from './Detail';
import { Button } from 'react-native';
import NewPost from './NewPost';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
         <Drawer.Navigator>
          <Drawer.Screen name="Home" component={StackNavBar} />
          <Drawer.Screen name="Detail" component={Detail} />
        {/* <Drawer.Screen name="Article" component={Article} /> */}
        
    </Drawer.Navigator>
      
    </NavigationContainer>
  );
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