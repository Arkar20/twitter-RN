import { Text, View,StyleSheet,Image,TouchableOpacity,FlatList,ScrollView} from "react-native";
import { Entypo, AntDesign } from '@expo/vector-icons';
import PostSingle from "./components/PostSingle";

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
export default function ({navigation}) {
  return (
    <ScrollView>
      <View style={styles.bgimg}></View>
      <View style={styles.avatarContainer}>
        <Image
                style={styles.avatar}
                 source={{
                  uri: 'https://images.pexels.com/photos/5961416/pexels-photo-5961416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
        />
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>Arkar</Text>
        <Text style={styles.subtitle}>@adamJeffery</Text>
        <Text style={styles.desc}>
            Et dolor ex occaecat dolor culpa eiusmod laboris irure commodo dolore anim aute cupidatat esse
        </Text>

        <View style={styles.footercontainer}>
            <View style={styles.footersection}>
                <Entypo name="location-pin" size={24} color="gray" />
                <Text  style={styles.subtitle}>Yangon</Text>
                <Text style={styles.subtitle}>,</Text>
                <Text style={styles.subtitle}>Myanmar</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
            <View style={styles.footersection}>
            <AntDesign name="link" size={14} color="gray" />
            <Text style={styles.linkText}>arkar.com</Text>
            
          </View>
            <View style={styles.footersection}>
                <AntDesign name="calendar" size={18} color="black" />
                <Text  style={styles.subtitle}>Yangon</Text>
                <Text style={styles.subtitle}>,</Text>
                <Text style={styles.subtitle}>Myanmar</Text>
          </View>
        </View>
        <View style={styles.socailContainer}>
          <View style={styles.social}>
            <Text style={styles.socialText}>509</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.social}>
            <Text style={styles.socialText}>509</Text>
            <Text>Followers</Text>
          </View>
          
        </View>

          <FlatList
        data={data}
        renderItem={({ item }) => <PostSingle navigation={navigation}/>}
        keyExtractor={item=>item.id }
      />
  

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  flexRow: {
    flexDirection:'row'
  },
  bgimg: {
    height: 150,
    backgroundColor:'#67568c',
  },
  linkText: {
    color: 'blue',
    margin:8
  },
  
  avatarContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent:'space-between'
    
  },
    avatar: {
    width: 80,
    height:80,
    borderRadius: 40,
    marginRight: 8,
      marginTop: -40,
      borderWidth: 2,
    borderColor:"white"

  },
  followButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  followText: {
    color:"white"
  },
  content: {
    paddingHorizontal:10
  },
  header: {
    fontSize: 26,
    fontWeight:'700'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal:2
  },
  desc: {
    fontSize: 18,
    lineHeight:24
  },
  footercontainer: {
    marginTop: 10,
  },
  
  footersection: {
    flexDirection:'row',
    alignItems: 'center',
    marginRight:10
    
  },
  socailContainer: {
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:10
  },
  social: {
      flexDirection:'row',
    alignItems: 'center',
    marginRight:10
  },
  socialText: {
    fontSize: 18,
    fontWeight: '700',
    marginRight:6
  },
});
