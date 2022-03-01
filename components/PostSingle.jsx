import { StyleSheet, Text, View,  TouchableOpacity,Image} from 'react-native';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

const PostSingle = ({ title, navigation }) => {

  const gotoProfile = () => {
    navigation.navigate("Profile");
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TouchableOpacity onPress={()=>gotoProfile()}>
            <Image
                style={styles.avatar}
                 source={{
                  uri: 'https://images.pexels.com/photos/5961416/pexels-photo-5961416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
          />
          </TouchableOpacity>
          <View style={styles.cardbody}>
          <TouchableOpacity style={styles.cardtitle} onPress={()=>gotoProfile()}>
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
          <TouchableOpacity style={styles.cardparacontainer} onPress={()=>navigation.navigate('Detail')}>
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
  
  )
}
export default PostSingle;
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

