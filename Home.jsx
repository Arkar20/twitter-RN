import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView,Text, View, Button,TextInput, TouchableOpacity,FlatList,ScrollView,Image} from 'react-native';
import { useState,useEffect } from "react";
import AddIcon from "./AddIcon";
import { MaterialIcons,Entypo,AntDesign } from '@expo/vector-icons';
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
const PostSingle = ({title,navigation}) => {
  return (
    <View style={styles.container}>

        <View style={styles.card}>
            <Image
                style={styles.avatar}
                 source={{
                  uri: 'https://images.pexels.com/photos/5961416/pexels-photo-5961416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
          />
          <View style={styles.cardbody}>
            <TouchableOpacity style={styles.cardtitle}>
                <Text style={styles.cardheader}>
                    Arkar
                </Text>
                <Text style={styles.cardspan}>
                    @arkar
                </Text>
                <Text>
                    &middot;
                </Text>
                <Text style={styles.cardspan}>
                    9m
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardparacontainer}>
              <Text style={styles.cardparatext}>
                    Sunt tempor proident fugiat culpa sit Lorem in ex. Minim aliquip amet do eiusmod ipsum minim laboris amet nulla. Commodo ut do nisi sint est voluptate eu dolore ullamco est. Quis deserunt deserunt et commodo est est dolor exercitation. Officia dolor aliquip pariatur aliquip adipisicing sunt veniam. Duis non quis ut magna cillum culpa.
                </Text>
            </TouchableOpacity>
            <View style={styles.socailContainer}>

              <View style={styles.socialSingle}>
                  <AntDesign name="hearto" size={20} color="gray" />
                <Text style={styles.textspacing1}>12</Text>
              </View>

              <View style={styles.socialSingle}>
                  <MaterialIcons name="comment" size={20} color="gray" />
                <Text style={styles.textspacing1}>12</Text>
              </View>

              <View style={styles.socialSingle}>
                <Entypo name="share" size={18} color="gray" />
              </View>

            </View>
          </View>
        </View>
        
      
      </View>
  
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
    <SafeAreaView>
      <FlatList
        data={data }
        renderItem={({item})=><PostSingle />}
        keyExtractor={item=>item.id }
      />

      
        
       
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textspacing1: {
      marginLeft:3
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
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight:8

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
