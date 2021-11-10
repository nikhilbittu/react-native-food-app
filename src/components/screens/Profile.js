import React from 'react';
import {View, Text, ScrollView, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {ProfileBody} from '../screenComponents/ProfileBody';
import BottomTabView from '../screenComponents/BottomTabView';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const Profile = ({route, navigation}) => {
  
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState(null);
  const [text4, onChangeText4] = React.useState(null);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ccffff',}}>
      
      <View style={{width: '100%', padding: 10,backgroundColor:'#cce6ff'}}>
      <TouchableOpacity
          style={styles.button}
         
          onPress={() => {
            navigation.navigate("Home")
          }}
            >
          <Text style={{color:'white'}}>LOGOUT</Text>
        </TouchableOpacity>
        <ProfileBody
          name="${text}"
          accountName="${text}"
          profileImage={require('../../storage/images/userProfile.png')}
          followers="3.6M"
          following="35"
          post="458"
        />
        
        {/* <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../../storage/images/userProfile.png')}
        /> */}
      </View>
      {/* <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
        </View>*/}
      {/* <BottomTabView /> */}
      <View style={{paddingTop:20}}>
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your First Name"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Enter your Last Name"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Enter your Address"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Bio</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="Enter your Bio"
        // keyboardType="numeric"
      />
      <Text style={{fontSize:20,paddingLeft:10,fontWeight:'bold'}}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText4}
        value={text4}
        placeholder="Enter your Mobile Number"
        keyboardType="numeric"
      />
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft:200,
    bottom:30,
    right:5,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    paddingLeft:0,
    width:100,
    left:260,
    top:30
  },
});
export default Profile;
