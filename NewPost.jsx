import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity ,TextInput} from 'react-native';
export default function () {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text>Character Left:280</Text>
        <TouchableOpacity style={styles.postButton}>
              <Text style={{color:"white"}}>Post</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.formcontainer}>
        <Image
                style={styles.avatar}
                 source={{
                  uri: 'https://images.pexels.com/photos/5961416/pexels-photo-5961416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
        />
        <TextInput style={styles.textfield}
          placeholder="What's Happening"
          multiline
          maxLength={280}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent:"space-between"
  },
  postButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  formcontainer: {
    flexDirection: 'row',
    paddingHorizontal:10
  },
    avatar: {
    width: 60,
    height:60,
    borderRadius:30,
    marginRight: 8,
    borderWidth: 2,
    borderColor:"white"

  },
  textfield: {
    flex:1,
    fontSize: 18,
    lineHeight: 28,
      padding:10
    }

})