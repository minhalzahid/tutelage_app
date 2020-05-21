import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createChat, sendMessage } from '../API/chatAPI';

function chat(props) {
  const [data, setData] = React.useState({
    message: "",
    lecture: props.route.params,
  })

  const getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  const handleMessage = () => {
    getData().then(user => {
      let members = [
        { member: user.user._id },
        { member: data.lecture.teacher_id }
      ]
      // console.log(members)
      createChat(members).then(res => {
        let body = {
          message: {
            body: data.message,
            user_id: user.user._id
          }
        }
        sendMessage(res.data._id, body).then(res => {
          setData({
            ...data,
            message: ""
          })
          alert("Message sent")
        })
      })
    })
  }

  return (
    <React.Fragment>
      <View style={styles.MainContainer}>
        <View styles={styles.start}><Text style={styles.message}>Message</Text></View>
        <TextInput
          style={styles.TextInputStyleClass}
          value={data.message}
          onChange={(e) => {
            setData({
              ...data,
              message: e.nativeEvent.text
            })
          }}
          underlineColorAndroid="transparent"
          placeholder={"Enter the text."}
          placeholderTextColor={"#9E9E9E"}
          numberOfLines={5}
          multiline={true}
        />

        <View style={styles.lastBtn1} >
          <TouchableOpacity style={styles.buttonContainer1}
            onPress={handleMessage} >
            <Text style={styles.buttonText1}>Send</Text>
          </TouchableOpacity>

        </View>
      </View>
    </React.Fragment>
  )
}
const styles = StyleSheet.create({
  start: {
    backgroundColor: 'green',
  },

  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%'
  },

  message: {
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  TextInputStyleClass: {

    textAlign: 'left',
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
    backgroundColor: '#348224',
    marginBottom: 40,
    marginLeft: '40%',
    marginTop: 20,
    borderRadius: 6,
    justifyContent: 'center',
    paddingTop: 7,
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