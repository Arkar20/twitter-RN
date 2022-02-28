// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Todos from './Todos';
import Detail from './Detail';
import { Button } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{
            title: 'My Custom home',
            headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"
            />
          ),
          }} />
        
        <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Todos} />
      <Tab.Screen name="Detail" component={Detail}  />
    </Tab.Navigator>
  );
}

export default App;