import React from 'react';
import {View, Text, StatusBar, ScrollView,ImageBackground,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
// import Stories from '../screenComponents/Stories';
// import Post from '../screenComponents/Post';
const image = { uri: "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg" };
const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
     
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Food APP</Text>
    </ImageBackground>
      </View>

      <ScrollView>
       
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          {/* <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    top:100,
    justifyContent: "center",
    height:500,
    width:450
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    bottom:300,
    left:10
  }
});


export default Home;
