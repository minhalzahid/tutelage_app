import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

function chat({ navigation }) {
  return (
    <React.Fragment>
      <View styles={styles.start}><Text style={styles.message}>Message</Text></View>
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          placeholder={"Enter the text."}
          placeholderTextColor={"#9E9E9E"}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      <View style={styles.lastBtn1} >
        <TouchableOpacity style={styles.buttonContainer1}
          onPress={() => navigation.navigate('StudentHomepage')} >
          <Text style={styles.buttonText1}>Send</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  )
}
const styles = StyleSheet.create({

  start: {
    backgroundColor: 'white',
  },

  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  message: {
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  TextInputStyleClass: {

    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    height: 150,
    marginLeft: 20,
    marginRight: 20,
  },

  lastBtn1: {
    width: 90,
    height: 40,
    backgroundColor: '#9a090c',
    marginBottom: 200,
    marginLeft: '40%',
    borderRadius: 6,
    justifyContent: 'center',
  },

  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

})
export default chat;