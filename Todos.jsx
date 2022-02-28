import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput, TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { useState,useEffect } from "react";
import AddIcon from "./AddIcon"
const data = [
  {
    id: 1,
    title: 'Hello world 1'
  },
  {
    id: 2,
    title: 'Hello world 2'
  },
  {
    id: 3,
    title: 'Hello world 3'
  },
  {
    id: 4,
    title: 'Hello world 4'
  },
];
const TodoSingle = ({title,navigation}) => {
  return (
    <TouchableOpacity style={styles.button} onLongPress={()=>navigation.navigate('Detail',{title})}>
            <Text>
              <AddIcon width={16} height={16} />
            </Text>

      <Text>{title}</Text>
        </TouchableOpacity>
  
) }


export default function Todos({navigation}) {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
        .catch(err=>console.log(err))
  },[])

  const handlePress = () => { 
    setTodos(() => ([...todos, { id: todos.length+1, title: input }]))
  }
  
  

  return (
    <>
  

      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoSingle title={item.title} navigation={navigation}/>}
        keyExtractor={todo => todo.id}
      />
    <ScrollView style={styles.container}>


      <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={newText => setInput(newText)}
        defaultValue={input}
      />
        <Button title="Add New" onPress={handlePress} />
        
        <View style={{ flexDirection: 'row', justifyContent:'center'}}>
        
        </View>


        </View>
      </ScrollView>
        
       
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,

  },
  typo: {
    backgroundColor:"yellow",
    padding:10,
    fontSize: 30,
  },
  input: {
    padding:15,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 2,
    margin: 20,
    borderRadius:50
  },
  button: {
    marginTop:10,
    backgroundColor:'pink',
    flexDirection: 'row',
    alignItems:'center',
    padding: 10,
    borderRadius:20
  
  },
  
});
