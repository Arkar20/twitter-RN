import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import PostSingle from './components/PostSingle';
import { useState,useEffect } from "react";
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
    <SafeAreaView>

      <FlatList
        data={data }
        renderItem={({ item }) => <PostSingle navigation={navigation}/>}
        keyExtractor={item=>item.id }
      />

      
        
       
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textspacing1: {
      marginLeft:3
  }, 
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight:8

  },

  socailContainer: {
    marginTop:10,
    flexDirection: 'row',
    
  },  
  socialSingle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:10,
        
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: 'gray',
    borderBottomWidth:0.5
  },
  cardtitle: {
    flexDirection:'row'
  },
  
  
  cardheader: {
    fontWeight:"700"
  },
  cardbody: {
    paddingRight:50
  },
  cardspan: {
    fontWeight: '300',
    marginHorizontal:8
  },
  cardparacontainer: {
    marginTop:5
  },
  cardparatext: {
    
    lineHeight:17,
  }
  
});
