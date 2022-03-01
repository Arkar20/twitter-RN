import {View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons,Entypo,AntDesign } from '@expo/vector-icons';

export default function ({ route, navigation }) {
  // console.log(route);
  return (
    <View>
      <View style={styles.detailContainer}>
        <View style={styles.flexRow}>
          <Image
                style={styles.avatar}
                 source={{
                  uri: 'https://images.pexels.com/photos/5961416/pexels-photo-5961416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
          />
            <TouchableOpacity >
                <Text style={styles.title}>
                    Arkar
                </Text>
              
                <Text style={styles.titlespan}>
                  @jeferryAdam
                </Text>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.textbody}>
          Lorem mollit ea mollit laborum amet id voluptate ex mollit. Velit amet excepteur ut magna ex aute ex irure et proident ex deserunt ullamco. Eu consectetur occaecat sunt eu ex adipisicing mollit ut laborum ad. Proident deserunt in in occaecat do est eiusmod excepteur. Eu consequat aliqua cupidatat qui.
      </Text>
      
        <View style={styles.statusContainer}>
            
        <TouchableOpacity style={styles.status}>
              <Text style={styles.textBold}>124</Text>
                <Text style={styles.statusText}>Retweets</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.status}>
              <Text style={styles.textBold}>124</Text>
                <Text style={styles.statusText}>Retweets</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.status}>
              <Text style={styles.textBold}>124</Text>
                <Text style={styles.statusText}>Retweets</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.socailContainer}>

                  <AntDesign name="hearto" size={20} color="black" />
                <EvilIcons name="comment" size={26} color="black" />
              {/* <AntDesign name="hearto" size={24} color="gray" /> */}
                  <AntDesign name="sharealt" size={20} color="black" />
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection:'row'
  },
  textBold: {
    fontWeight: '800',
    // marginRight:10
  },  
  detailContainer: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  
  },
    avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight:8

  },
  title: {
    fontWeight: '700',
    fontSize:16
    },
  titlespan: {
    marginTop:3,
    fontWeight: '200',
    fontSize:12
  },
  textbody: {
    marginTop: 6,
    paddingHorizontal:5,
    fontSize: 17,
    fontWeight: '300',
    lineHeight: 23,
  
    
  },
  statusContainer: {
    marginTop:10,
    paddingVertical: 10,
    paddingHorizontal:5,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth:0.5
    
  },
  status: {
    flexDirection:'row',
    marginRight:8
  },
  statusText: {
    paddingHorizontal:4
  },
  socailContainer: {
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'black',
    borderBottomWidth:0.3
  }


  
});
