
import * as React from 'react';
import { View, TextInput, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { getLecture, enrollLecture, searchLectures, lectureRequest } from '../API/lectureAPI';

const options = {
  title: 'my pic app',
  takePhotoButtonTitle: 'Take photo With your Camra',
  chooseFromLibraryButtonTitle: 'Choose photo from Gallary ',
}

const logo = require('../images/log.jpeg');

class StudentHomepage extends React.Component {

  static contextType = NavigationContext;
  state = {
    lecture: [],
    searchedLectures: [],
    query: ""
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
      enrollLecture(user.user._id, lectureId).then(res => {
        alert("You are enrolled");
      })
        .catch(e => {
          console.log(e.response)
          alert(e.response.data ? e.response.data : e);
        })
    })
  }

  requestLecture = (lecture) => {
    this.getData().then(user => {
      let body = {
        lecture_id: lecture._id,
        receiver: lecture.teacher_id,
        sender: user.user._id
      }
      console.log(body)
      lectureRequest(body).then(res => {
        alert("Your Request has been sent")
      }).catch(e => {
        console.log(e.response)
        alert(e.response.data)
      })
    })
  }

  render() {
    const navigation = this.context;

    return (
      <View>
        <ScrollView style={styles.main}>

          {/* <View style={styles.field}>
            <TextInput style={{ fontSize: 19, fontWeight: 'bold', }} placeholder=" Search Lecture" />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, padding: 10 }}>
              Find Lecture !
            </Text>
          </View> */}
          <View style={styles.field}>
            <TextInput style={styles.search}
              value={this.state.query}
              onChange={(e) => {
                if (e.nativeEvent.text === "") {
                  this.setState({
                    searchedLectures: [],
                    query: e.nativeEvent.text
                  })
                }
                else {
                  this.setState({
                    query: e.nativeEvent.text
                  })
                }
              }}
              placeholder=" Search Topic" />
            <View style={styles.lastBtn4}>
              <TouchableOpacity style={styles.buttonContainer4}
                onPress={() => searchLectures(this.state.query).then(res => {
                  if (res.data.length === 0) {
                    alert("No lectures found")
                  }
                  this.setState({
                    searchedLectures: res.data
                  })
                })}>
                <Text style={styles.buttonText4}>Go</Text>
              </TouchableOpacity>

            </View>
          </View>

          <View style={styles.logout} >
            <TouchableOpacity style={styles.logoutContainer}
              onPress={() => navigation.navigate('LoginScreen')} >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>
              Upcoming Lectures
            </Text>
          </View>

          {(this.state.searchedLectures.length === 0) ? this.state.lecture.map((x, key) => {
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
                  <View style={styles.lastBtn1} >
                    <TouchableOpacity style={styles.buttonContainer1}
                      onPress={() => this.requestLecture(x)} >
                      <Text style={styles.buttonText1}>Attend</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.lastBtn2} >
                    <TouchableOpacity style={styles.buttonContainer2}
                      onPress={() => navigation.navigate('chat', x)} >
                      <Text style={styles.buttonText2}>Chat</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.lastBtn3} >
                    <TouchableOpacity style={styles.buttonContainer3}
                      onPress={() => navigation.navigate('Readmore', x)} >
                      <Text style={styles.buttonText3}>Read More</Text>
                    </TouchableOpacity>
                  </View>

                </View>

              </View>

            )
          }) : this.state.searchedLectures.map((x, key) => {
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
                  <View style={styles.lastBtn1} >
                    <TouchableOpacity style={styles.buttonContainer1}
                      onPress={() => { alert('Request Sent Successfully!') }} >
                      <Text style={styles.buttonText1}>Attend</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.lastBtn2} >
                    <TouchableOpacity style={styles.buttonContainer2}
                      onPress={() => navigation.navigate('chat')} >
                      <Text style={styles.buttonText2}>Chat</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.lastBtn3} >
                    <TouchableOpacity style={styles.buttonContainer3}
                      onPress={() => navigation.navigate('Readmore', x)} >
                      <Text style={styles.buttonText3}>Read More</Text>
                    </TouchableOpacity>
                  </View>

                </View>

              </View>
            )
          })}
        </ScrollView>

        <View style={styles.lastButton} >
          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate('Studenthomepage')}>
              <Text style={styles.buttonText5}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer5}
              onPress={() => navigation.navigate('Teacherprofilepage')}>
              <Text style={styles.buttonText5}>Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn5} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('Studentinbox')}>
              <Text style={styles.buttonText5}>Inbox</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastBtn6} >
            <TouchableOpacity style={styles.buttonContainer1}
              onPress={() => navigation.navigate('Notificationstd')}>
              <Text style={styles.buttonText5}>Notifications</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  search: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },

  main: {
    backgroundColor: 'white',
    height: '95.5%',
  },

  field: {
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    alignContent: 'center',
    backgroundColor: 'white',
    fontSize: 24,
  },

  description: {
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 15,
    marginBottom: 7,
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

  heading: {
    fontSize: 26,
    alignContent: 'center',
    marginLeft: '11.5%',
    backgroundColor: '#9a090c',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    width: 280,
    height: 60,
    borderRadius: 35,
    textAlign: 'center',
    paddingTop: 10,
  },

  sectionContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    backgroundColor: 'white',
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

  logout: {
    width: 90,
    height: 40,
    backgroundColor: '#348224',
    marginTop: 20,
    marginLeft: '5%',
    borderRadius: 6,
    justifyContent: 'center',
    paddingTop: 4,
  },

  logoutText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  TextInputStyleClass: {
    textAlign: 'left',
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
    width: 390,
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

  lastBtn4: {
    width: 60,
    height: 40,
    backgroundColor: '#348224',
    marginLeft: '54%',
    justifyContent: 'center',
    marginBottom: 5,
    borderRadius: 8,
    paddingTop: 5,
  },

  buttonText4: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },

  lastBtn1: {
    width: 100,
    height: 40,
    backgroundColor: '#348224',
    marginBottom: 40,
    marginLeft: '4%',
    borderRadius: 6,
    justifyContent: 'center',
  },

  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    paddingTop: 5,
  },

  lastBtn2: {
    width: 100,
    height: 40,
    backgroundColor: '#348224',
    marginBottom: 40,
    borderRadius: 6,
    justifyContent: 'center',
  },

  buttonText2: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    paddingTop: 5,
  },

  lastBtn3: {
    width: 100,
    height: 40,
    backgroundColor: '#348224',
    marginBottom: 40,
    borderRadius: 6,
    justifyContent: 'center',
  },

  buttonText3: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    paddingTop: 5,
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

  lastButton: {
    flex: 3,
    flexDirection: 'row',
  },

  lastBtn5: {
    width: 90,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
  },

  buttonText5: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  lastBtn6: {
    width: 150,
    height: 53,
    backgroundColor: '#9a090c',
    justifyContent: 'center',
    paddingTop: 4,
    paddingRight: 25,
    paddingLeft: 15,

  },
})
export default StudentHomepage;