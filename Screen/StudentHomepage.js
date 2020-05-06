
import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { getLecture, enrollLecture } from '../API/lectureAPI';

const options = {
  title: 'my pic app',
  takePhotoButtonTitle: 'Take photo With your Camra',
  chooseFromLibraryButtonTitle: 'Choose photo from Gallary ',
}

const logo = require('../images/log.jpeg');

class StudentHomepage extends React.Component {

  static contextType = NavigationContext;
  state = {
    lecture: []
  }

  constructor(props) {
    super(props)
    getLecture().then(res => {
      console.log(res.data)
      this.setState({
        lecture: res.data
      })
    })
  }
  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  enroll = (lectureId) => {
    this.getData().then(user => {
      enrollLecture(user._id, lectureId).then(res => {
        alert("You are enrolled");
      })
        .catch(e => {
          alert(e.response.message);
        })

    })



  }

  render() {
    const navigation = this.context;

    return (
      <ScrollView>
        <React.Fragment>

          <View style={styles.field}>
            <TextInput style={{ fontSize: 19, fontWeight: 'bold', }} placeholder=" Search Lecture" />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, padding: 10 }}>
              Find Lecture !
            </Text>
          </View>

          {this.state.lecture.map((x, key) => {
            return (
              <View style={{ borderBottomWidth: 1 }} key={key}>
                <TouchableHighlight style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}>
                  <Image source={logo} style={styles.profileImg} />
                </TouchableHighlight>

                <View style={styles.contain}>
                  <Text style={styles.input}>{x.course}</Text>
                  <Text style={styles.input}>{x.topic}</Text>
                </View>

                <View><Text style={{ fontSize: 20, marginLeft: 12, marginTop: 15, }}>Description:</Text></View>
                <View style={styles.MainContainer}>
                  <TextInput
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="transparent"
                    placeholder={"Type about Description."}
                    value={x.description}
                    placeholderTextColor={"#9E9E9E"}
                    numberOfLines={5}
                    multiline={true}
                  />
                </View>

                <View style={styles.lastBtn} >
                  <Button

                    title="Attend Class"
                    type="solid"
                    onPress={() => this.enroll(x._id)}
                  />
                  <Button

                    title="Chat_Box"
                    type="solid"
                    onPress={() => navigation.navigate('chat')}
                  />
                  <Button

                    title="Read_More"
                    type="solid"
                    onPress={() => navigation.navigate('Readmore')}
                  />
                </View>

              </View>

            )
          })}


          <View style={styles.lastBt} >

            <Button
              title="InBox"
              type="outline"
              onPress={() => navigation.navigate('Studentinbox')}
            />
            <Button
              title="Notification"
              type="outline"
              onPress={() => navigation.navigate('Notificationstd')}
            />
            <Button
              title="Profile"
              type="outline"
              onPress={() => navigation.navigate('Teacherprofilepage')}
            />
          </View>
        </React.Fragment>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  field: {
    alignItems: 'center',
    borderWidth: 1,
    paddingTop: 10,
    alignContent: 'center',
    backgroundColor: 'white',
    fontSize: 22,
  },
  text: {
    alignItems: 'center',
    padding: 10,


  },
  Image: {
    padding: 14,
    width: 400,
    borderRadius: 54,
    alignItems: 'flex-end',

  },

  logo: {
    marginTop: 15,
    width: 100,
    height: 100,
  },
  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    borderBottomWidth: 1,
  },
  contain: {
    flex: 1,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 5

  },
  TextInputStyleClass: {

    textAlign: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,

  },
  lastBtn: {
    flex: 1,
    flexDirection: 'row',
    width: 440,
    borderRadius: 54,
    justifyContent: 'space-around',
    marginBottom: 15,
  },

  lastBt: {
    flex: 1,
    flexDirection: 'row',
    width: 440,
    borderRadius: 54,
    justifyContent: 'space-around',
    padding: 30
  },
  profileImgContainer: {
    marginTop: 30,
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'flex-end'
  },
})
export default StudentHomepage;